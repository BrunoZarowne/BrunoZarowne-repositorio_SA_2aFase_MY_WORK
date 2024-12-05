import express, { json, query } from 'express'
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
    database:'My_work_sa',
    password:"senai",
    port: 5432
    


})


app.post('/Usuarios', async(request,response)=>{

    const { nome,email,senha,dataNascimento,eDev,eAdm } = request.body;

    try{
        const resultado = await pool.query(
            'INSERT INTO myWork ( nome,email,senha,dataNascimento,eDev,eAdm) VALUES ($1, $2,$3,$4,$5,$6) RETURNING *',

            [nome,email,senha,dataNascimento,eDev,eAdm]
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
        const resultado=await pool.query('select * from myWork')
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
        const resultado=await pool.query('DELETE FROM myWork WHERE nome = $1 RETURNING *',[nome])
        
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

app.listen(3333)
/*
    MISSÂO
   Criar nossa api de usuarios

   -criar um usuario
   -listar todos usuarios
   -Editar todos usuario
   -deletar um usuario

    
    
    
    
*/







