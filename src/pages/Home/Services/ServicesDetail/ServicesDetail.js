import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Card, CardGroup, Col, Row,Container, Image } from 'react-bootstrap';
import { color } from '@mui/system';
import { Link } from 'react-router-dom';

const ServicesDetail = () => {
    const {serviceId}=useParams()
   
    const [serviceDetail,setServiceDetail]=useState([])
    const [singleDetail,setSingleDetail]=useState([])
    useEffect(()=>{
        fetch('/serviceDetail.json')
        .then(res => res.json())
        .then(data => setServiceDetail(data.service))
    },[serviceDetail])

// load  service detail
useEffect(()=>{
   const findDetail=serviceDetail.find(service=>service.id==serviceId)
   setSingleDetail(findDetail)
},[serviceDetail])
   
    return (
        <div >
            <Card.Title style={{color:"#513125"}}> <h1>  {singleDetail?.name}</h1>
            </Card.Title>
           
                        <Container  >
                <Row style={{margin:"5%" ,width:"100%"  }}>
                    <Col md={4}>
                       <Card >
                       <Card.Img variant="top" src={singleDetail?.img}/>
                           </Card> 
                 
                    </Col>
                    <Col md={5}>
                    <Card style={{ width: '18rem',backgroundColor:"wheat", color:"#513125" }}>
  
  <Card.Body   >
   
    <Card.Text>
     {singleDetail?.Detail}
    </Card.Text>
    <Card.Title style={{color:"#513125"}}><h3>Fee: {singleDetail?.fee}</h3></Card.Title>
    
  </Card.Body>
  <Link to="/home">
  <button  style={{backgroundColor:"goldenrod", color:"#513125",width:"100",borderRadius:"5px",padding:"2px",marginBottom:"5px"}} variant="primary">Go back</button>
  </Link>
</Card>
                    </Col>
                </Row>
            </Container>
            
           


{/*           
            {
              console.log(services.find(serviceInfo=>serviceInfo.serviceId===serviceId))
               
            } */}
            
        </div>
    );
};

export default ServicesDetail;