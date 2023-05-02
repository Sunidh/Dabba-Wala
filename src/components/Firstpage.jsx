import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from './Navbar';
import Login from './login'
import Logof from './logof.png' 
import Card from 'react-bootstrap/Card';
import {Link, useNavigate} from 'react-router-dom'
import Food from './Foods.jpg'
import Delivery from './delivery.png'
import './Firstpage.css'
export default function Firstpage() {
  const navigate=useNavigate();
  const loginClick = () =>{
    return(
      <Login/>
    )
  }
  return (
    <>
       
     
         
    
       <div className='firstcards' >
       <div className='firstcard' >
     <img className='food' src={Food} alt="" />
     <p className='firsttext'>We believe that good food should be accessible to everyone, which is why we partner with local restaurants and chefs to bring you a wide variety of cuisines and dishes. From comfort food to healthy options, we have something for everyone.</p>
    </div>
    <div className='secondcard' >
    
     <p className='secondtext'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, soluta nesciunt dignissimos cumque ab maiores totam a assumenda odio natus asperiores ullam placeat tenetur quis autem quia ipsum adipisci et accusantium obcaecati itaque nisi.</p>
     <img className='food' src={Delivery} alt="" />
    </div>
    <div className="orderbox">
    <button className='orderButton' onClick={()=>navigate("/main")} >Order Now</button>
    </div>
       </div>
    </>
  )
}
