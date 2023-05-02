import React, { useState } from 'react'
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Home from './Home';
export default function User() {
  const [open,setOpen]=useState(false);
  const listRef=useRef();
  const iconRef=useRef();
  const navigate=useNavigate();

  window.addEventListener("click",(e)=>{
    if(e.target!==listRef.current && e.target!==iconRef.current){
      setOpen(false);
    }
  });
  return (
    <div>
       <div className="usericon"  >
        <i ref={iconRef} onClick={()=>setOpen(!open)} class="fa-solid fa-circle-user"  ></i>
        </div>
        {
          open && (
            <div ref={listRef} className='  w-52 shadow-lg absolute -left-14 top-24'>
        <ul className='' onClick={()=>setOpen(false)}>
          <li onClick={()=>navigate('/')}>Home
            </li>
          <li onClick={()=>navigate('/account')} >Account</li>
          <li onClick={()=>navigate('/orders')} >Orders</li>
          <li onClick={()=>navigate("/Addresses")} >Addresses</li>
          <li onClick={()=>navigate("/logout")}>Logout</li>
        </ul>
        </div>
          )
        }
    </div>
  )
}
