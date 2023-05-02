import React from 'react'
import { Card,Button,Row,Col } from 'react-bootstrap'
import './checkout.css'
import image from './bg.jpeg'
export default function Checkout() {
  return (
    <div>
      <div className="container">
      <Card>
      <Card.Header className='checkheader' >Checkout</Card.Header>
      <Card.Body>
        <Card.Title>Your Items</Card.Title>
        <Row >
            <Col >
            <img className='cartimg' src={image} alt="" />
            <p>1 Month </p></Col>
            <Col>
            <Button variant="danger">Remove</Button>
            
            </Col>
            <Col className='pricebox'>
                <div>
                             </div>
            </Col>
        </Row>
        <Button className='pay-btn' variant=" "  m-20>Proceed to Pay</Button>
      </Card.Body>
    </Card>
      </div>
    </div>
  )
}
