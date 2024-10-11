import React from 'react'
import './LandingPage.css'
import { Link, useNavigate } from 'react-router-dom'
import CadastroMyWork from './CadastroMyWork'
function LandingPage() {
  const navigate = useNavigate("")
  
  return (
    <div className='containerLanding'>
  <div className='divImagem'></div>

      <div className='divText' >
        <h1 className='h1Landing'>Free your <br></br>
            imagination</h1>
            <div className='divTextP'>
            <p className='pInfoSite'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />  Quam a ab est deleniti quod, quas libero maxime dolorum! <br /> Corrupti <br /> quasi blanditiis quaerat cupiditate nobis dolor enim, nostrum culpa veritatis <br /> reiciendis!</p>
            </div>
            <div className='divButaos'>
                <button className='butaoUm'>Dowload</button> <button className='butaoDois'><Link to={"/cadastro"} className='linkCadastro'>Sing</Link></button>
            </div>
        </div>
    
    </div>
  )
}

export default LandingPage
