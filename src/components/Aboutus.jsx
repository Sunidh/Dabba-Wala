import React from 'react'
import './Aboutus.css'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default function Aboutus() {
  return (
    <>
    <div className='mission'>
     <p> " Our Mission is that no one misses their home food outside their home as Each person needs Maa ke hath ka khana"
     </p>
    </div>
    <div className="future">
        <h1>What's Our Future Goal?</h1>
        <p>We are planning to be India's Most loving tiffin services Platform.<br/>
        We are currently available in 10+ cities and are working on expanding it to wherever possible.
        </p>
    </div>
    <div className="team">
        <h1>Our Team</h1>
        <Row>
            <Col>
    <Card style={{ width: '18rem' }} className='cards'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card className='cards' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </div>
    <div className="connect">
        <h2>Connect With Us</h2>
        <h5>Instagram Facebook Twitter LinkedIn</h5>
    </div>
    </>
  )
}
