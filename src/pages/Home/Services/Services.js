import { height } from '@mui/system';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Services = () => {
    
    return (
        <div  >
            <h2>Our Main Services</h2>
            <div className="container-fluid" style={{backgroundColor:"#513125"}}>
                <h1>services</h1>
               
                <Row xs={1} md={2} className="g-4">


  
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
 
</Row>
            </div>

        </div>
    );
};

export default Services;