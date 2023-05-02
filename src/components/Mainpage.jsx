import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Mainpage.css'
import Carddata from './Carddata.json';
import { Col, Container, Row } from 'react-bootstrap';
import { ThemeProvider } from 'react-bootstrap'
import Checkout from './Checkout';
import { Link, useNavigate } from 'react-router-dom';
import Subscription from './Subscription';
import Description from './Description';
import { useState } from 'react';
import Star from './Star';
import Topbar from './topbar';
function Mainpage() {
  const navigate=useNavigate();
  
  const DisplayContent=Carddata.map(
    (data)=>{
      return (
        <div className='citycards'  >
     
    
    
     <Row xs={1} sm={2} md={3} lg={4}></Row>
        <Container className=' mt-4'  >
              <Row >
                <Col >
        {/* <a style={{textDecoration : "none", color : "black"}} href={data.url}> */}
        <div style={{textDecoration:"none" ,color:"black"}} onClick={()=>navigate('/description')}>
          <div className='citycard'  >
        <img className='logofood' src={data.logo} alt="image" />
        <p>{data.name}</p>
       <Star/>
        
        </div>
        {/* </a> */}
        </div>
        </Col>
        </Row>
        </Container>
        
        </div>
       
      )
    }
  )
  
  return (
    <>
    
    {/* <div className='citycards'  >
     
    <Container className='resto-cards'   >
    
     <Row xs={1} sm={2} md={3} lg={4}>
    
      
      {DisplayContent}
     
      
      </Row>
      
      </Container>
      */}
    {/* </div> */}
    </>
  );
}

export default Mainpage;