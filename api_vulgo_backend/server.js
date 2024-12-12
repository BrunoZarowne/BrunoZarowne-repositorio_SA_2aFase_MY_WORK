import express, { json, query, request, response } from 'express'
import pkg from 'pg'
import cors from 'cors'
const {Pool} = pkg
const app = express()
app.use(express.json())
app.use(cors({   methods: ['GET', 'POST', 'PUT', 'DELETE'] }))// metodos permitidos
//GET tras informações
//POST cria coisas como exemplo um usuario
//PUT vai Editar um usario(Varios)
//Delete vai excluir um usuario
//PATCH edita somente um usuario

const user=[]

const pool=new Pool({
    user:'postgres',
    host:'localhost',
    database:'myWork',
    password:"1234",
    port: 5432
    


})


app.post('/Usuarios', async(request,response)=>{

    const { nome,email,senha,datanascimento,edev,eadm } = request.body;

    try{
        const resultado = await pool.query(
            'INSERT INTO Usuarios ( nome,email,senha,dataNascimento,eDev,eAdm) VALUES ($1, $2,$3,$4,$5,$6) RETURNING *',

            [nome,email,senha,datanascimento,edev,eadm]
        )

        
        
  
    }catch(err){
        console.error("Erro ao inserir o usuário:", err.message);
        response.status(500).json({ error: 'Erro interno do servidor' });//<- informa que o problema é com o Backend

    }

// user.push(request.body)
// response.status(201).json(request.body)


})
app.get('/Usuarios', async(request,response)=>{
    // response.status(200).json(user)
    try{
        const resultado=await pool.query('select * from Usuarios')
        response.status(200).json(resultado.rows)

    }catch(err){
        console.error('erro ao buscar usuario',err)
        response.status(500).json("erro interno do servidor")


    }

})

app.delete('/Usuarios/:nome', async(request,response)=>{
    const {nome}= request.params
    console.log("usuario tadaana",nome)

    try{
        const resultado=await pool.query('DELETE FROM Usuarios WHERE nome = $1 RETURNING *',[nome])
        
        if(resultado.rowCount>0){
            response.status(200).json({message:`Usuario ${nome} foi excluido`})

        }else{
            response.status(404).json({message:`Usuario Não encontrado com ${nome}`})
        }

    }catch(err){
        console.error("erro ao deletar o Usuario")
        response.status(500).json({error:'erro ao deletar o usuario'})

    }

})
app.get('/Usuarios/logado/:nome',async(request,response)=>{
    const {nome} = request.params
   try{
    const resultado= await pool.query('select nome,email,senha,dataNascimento,eAdm,eDev from Usuarios where nome=$1 ',
        [nome])

        if (resultado.rows.length > 0) {
            response.status(200).json(resultado.rows[0]); // Envia o usuário encontrado
          } else {
            response.status(404).json({ message: 'Usuário não encontrado' }); // Se nenhum usuário for encontrado
          }
     
   }catch(err){
    console.log("errro",err)


   }

})

app.put('/Usuarios/atualizar/:nome', async(request,response)=>{

const {nome}=request.params
const{email,senha,dataNascimento}=request.body

    try{
        const resultado = await  pool.query('UPDATE Usuarios SET email = $1, senha = $2, dataNascimento = $3  WHERE nome = $4 RETURNING *',
            [email,senha,dataNascimento,nome])

            if (resultado.rowCount > 0) {
                response.status(200).json(resultado.rows[0]); // Retorna o usuário atualizado
              } else {
                response.status(404).json({ message: `Usuário ${nome} não encontrado.` }); // Nome não encontrado
              }
            } catch (erro) {
              console.error('Erro ao atualizar o usuário:', erro);
              response.status(500).json({ error: 'Erro interno do servidor' });
            }
})
app.post('/Usuarios/login', async(request,response) => {

    const {email,senha}=request.body

   try{
       const resultado = await pool.query('SELECT * FROM Usuarios WHERE email ILIKE $1 AND senha = $2',[email,senha])
       
       
       if (resultado.rows.length > 0) {
        console.log('Usuário retornado pelo banco:', resultado.rows[0])
           // Usuário encontrado
           response.json({ success: true, user: resultado.rows[0] });
       } else {
           // Usuário não encontrado
           response.status(401).json({ success: false, message: 'Email ou senha inválidos' });
       }

   }catch(erro){
       console.error("o erro foi:",erro)

   }

})

app.post('/PostarObras',async(request,response)=>{
    const { title ,author,page,date ,summary,image ,genre} = request.body;
    try{
        const resultado= await pool.query('INSERT INTO Obras ( title ,author,page,date ,summary,image ,genre ) VALUES ($1, $2,$3,$4,$5,$6,$7) RETURNING *',[title ,author,page,date ,summary,image ,genre])

    }catch(erro){
        console.error("Erro ao inserir o usuário:", erro.message);
        response.status(500).json({ error: 'Erro interno do servidor' });//<-- indica que o erro foi no backend

    }

})
app.get('/obrasHQ', async(request,response)=>{
    try{
        const resultado = await pool.query("SELECT * from Obras where genre = 'HQ' ")
        response.status(200).json(resultado.rows)

    }catch(erro){

    }
})
app.get('/obrasManga', async(request,response)=>{
    try{
        const resultado = await pool.query("SELECT * from Obras where genre = 'Manga' ")
        response.status(200).json(resultado.rows)

    }catch(erro){

    }
})
app.get('/obrasLivros', async(request,response)=>{
    try{
        const resultado = await pool.query("SELECT * from Obras where genre = 'Livro' ")
        response.status(200).json(resultado.rows)

    }catch(erro){

    }
})
app.get('/UsuarioLogado',async(request,response)=>{
    try{
        const resultado = await pool.query('SELECT * from UsuarioLogado') 
        response.json(resultado.rows[0]);

    }catch(err){
        console.error('seu erro foi: ',err)

    }

})
app.post('/UsuarioLogado',async(request,response)=>{
    const {nome,email,senha,datanascimento,edev,eadm}=request.body
    try{
        const resultado = await pool.query('INSERT INTO UsuarioLogado( nome,email,senha,dataNascimento,eDev,eAdm) VALUES ($1, $2,$3,$4,$5,$6) RETURNING *',
 [nome,email,senha,datanascimento,edev,eadm])

 response.status(201).json(resultado.rows[0]);

    }catch(erro){
        console.error("Erro ao inserir o usuário:", erro.message);
        response.status(500).json({ error: 'Erro interno do servidor' })
    }

})
app.delete('/UsuarioLogado',async(request,response)=>{
    try{
        const resultado= await pool.query('DELETE from UsuarioLogado')

    }catch(erro){
        response.status(500).json({error:'erro interno do servirdor'})
    }
})
app.put('/UsuarioLogado',async(request,response)=>{
    const {email,senha,dataNascimento}=request.body
    try{
        const resultado = await pool.query('UPDATE UsuarioLogado SET email = $1, senha = $2, dataNascimento = $3   ',
            [email,senha,dataNascimento])

            if (resultado.rowCount > 0) {
                response.status(200).json(resultado.rows[0]); // Retorna o usuário atualizado
              } else {
                response.status(404).json({ message: `Usuário ${nome} não encontrado.` }); // Nome não encontrado
              }

    }catch(erro){

    }
})

app.get('/ObrasSelecionada',async(request,response)=>{
    try{
        const resultado = await pool.query('SELECT * FROM obrasSelecionada ')
        response.json(resultado.rows[0])

    }catch(erro){

    }
})

 app.post('/ObrasSelecionada',async(request,response)=>{
    const {title ,author,page,date ,summary,image ,genre}=request.body
     try{
      const resultado = await pool.query('INSERT INTO obrasSelecionada ( title ,author,page,date ,summary,image ,genre ) VALUES ($1, $2,$3,$4,$5,$6,$7) RETURNING *',
           [title,author,page,date,summary,image,genre])


   }catch(erro){
       console.error('o erro foi: ',erro)
        

    }
 })

app.delete('/ObrasSelecionadaDeletar',async(request,response)=>{
   try{
       const resultado = await pool.query('DELETE FROM obrasSelecionada')
       response.status(200).send({ message: 'Obras deletadas com sucesso' })

     }catch(erro){
        console.log('seu erro foi ',erro)
        response.status(500).send({ message: 'Erro ao deletar obras' });

    }
 })


app.listen(3333)
/*
    MISSÂO
   Criar nossa api de usuarios

   -criar um usuario
   -listar todos usuarios
   -Editar todos usuario
   -deletar um usuario

    
    
    
    
*/

// Create table Obras(
//     id int primary key not null,
//     title varchar(20),
//     author varchar(100),
//     page decimal,
//     date date,
//     summary varchar(600),
//     image varchar(2000),
//     genre varchar(10)   
//     );<-- tabela para fazer no senai para o crud
/* comando para dar na tabela ALTER TABLE Obras ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY;
select * from Obras*/



/*<-- tabela para o Usuario online no momento
create table UsuarioLogado( 
    id int primary key not null,
    nome varchar(100),
    email varchar(200),
    senha varchar(15),
    dataNascimento varchar(12),
    eAdm boolean,
    eDev boolean
    
    );
    select * from UsuarioLogado
    ALTER TABLE Usuarios ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY */

/*<--tabela da obra selecionada pelo autor
    create table obrasSelecionada(
        id int primary key not null,
            title varchar(20),
             author varchar(100),
             page decimal,
            date date,
            summary varchar(600),
           image varchar(2000),
           genre varchar(10)  

    );
     ALTER TABLE obrasSelecionadas ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY
    select * from obrasSelecionada
    alter table obrasSelecionada
    alter column date type varchar(13)

    alter table obrasSelecionada
    alter column page type varchar(3)
    */









