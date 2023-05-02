import React, { Component } from 'react';
import {Link, useLocation} from 'react-router-dom';
import { useState } from 'react';
import Logof  from './logof.png'
import './navbar.css'
import Homepage from './Homepage';
import Firstpage from './Firstpage';
import Selectcity from './Selectcity';
import User from './user';


function Navbar() {
  
  const [clicked, setClicked] = useState(false);
  const location=useLocation();

  const handleClick = () => {
    setClicked(!clicked);
  };
 
  return (
    <>
      <nav>
        <a>
          <img
            alt=""
            src={Logof}
            width="60"
            height="60"
            className="d-inline-block align-top"
          />
        </a>
        <div>
          <ul id="nav" className={clicked ? "#nav active" : "#nav"}>
          {location.pathname === '/main' && (
              <>
                <li>
                  <Link to="/search">Search</Link>
                </li>
               
                <li>
                  <Link to="/select">Select</Link>
                </li>
                <li>
                 <User/>
                </li>
              </>
            )}
           {location.pathname!=='/main' && (
            <>
            <li>
              <Link to="./Aboutus">Aboutus</Link>
            </li>
            <li>
              <Link to="./Services">Services</Link>
            </li>
            <li>
              <Link to="./admin">Admin</Link>
            </li>
            <li>
              <Link to="./ContactUs">Contact us</Link>
            </li>
            <li>
              <Link to="./login">Log In</Link>
            </li>
            </>
           )}
              
          
          </ul>
           
        </div>
        <div id="mobile" onClick={handleClick}>
          <i id="bar" className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
