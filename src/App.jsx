import React from 'react'
import Home from './components/Home';
import Login from './components/login';
import Signup from './components/Signup';
import Mainpage from './components/Mainpage';
import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Admin from './components/Admin';
import ContactUs from './components/ContactUs';
import Checkout from './components/Checkout';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css'
import Star from './components/Star';

import Topbar from './components/topbar';
import User from './components/user';
import Description from './components/Description';
import Menu from './components/Menu';
import Subscription from './components/Subscription';

import Firstpage from './components/Firstpage';
import Register from './components/RegisterForm';
import Selectcity from './components/Selectcity';
import Logout from './components/Logout';

const App = () => {

  return (
    <>
    
 <BrowserRouter>
         <Navbar/>
       
         <Routes>
        <Route exact path='/' element={ <Firstpage/>}/>
          
          <Route exact path="/login" element={<Login />} />

          <Route exact path="/Services" element={<Services />} />

          <Route exact path="/aboutus" element={<Aboutus />} />
          <Route exact path="/admin" element={<Admin />} />
           <Route  path='/main/:slug' element={<Description/>} /> 
           <Route  path='/main/description' element={<Description/>} />
          <Route exact path='/main' element={<Selectcity />} />
          <Route exact path='/user' element={<User />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path="/checkout" element={<Checkout/>}/>
          <Route exact path='/register' element={<Register/>} />
        <Route exact path='/logout' element={<Logout/>}></Route>
        <Route exact path="/select" element={<Selectcity/>}/>
        {/* <Route exact path="/search" element={<Selectcity/>}>


        </Route> */}
        </Routes> 
 

 

      </BrowserRouter>   
        

      {/* <Login/>   */}


      {/* <Topbar/>  */}
      {/* <Selectcity/> */}

      {/* <Description/> */}
      {/* <Menu/> 
    //   <Subscription/>
     
    {/* <Logo/> */}
      {/* <Checkout/>
      <Firstpage/> */}
       {/* <Star/>
      <Signup/> */}
      
    </>
  );
}

export default App;