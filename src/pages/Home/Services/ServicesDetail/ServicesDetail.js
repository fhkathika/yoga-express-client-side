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
        .then(data => setServiceDetail(data))
    },[serviceDetail])

// load  service detail
useEffect(()=>{
   const findDetail=serviceDetail.find(service=>service.id==serviceId)
   setSingleDetail(findDetail)
},[serviceDetail])
const background_url='https://i.ibb.co/VHK0F48/Yoga-Background-HD-Photos-All-White-Background.png'
   const bg={
       background:`url(${background_url})`
   }
    return (
        <div style={bg} sx={{height:'100%'}} >
            <Card.Title style={{color:"#513125"}}> <h1>  {singleDetail?.name}</h1>
            </Card.Title>
           
                        <Container  >
                <Row style={{margin:"5%" ,width:"100%"  }}>
                    <Col md={4} sm={12}>
                       <Card  style={{backgroundColor:'#513125',}}>
                       <Card.Img variant="top" style={{ height:'250px',borderRadius:'25%'}} src={singleDetail?.img}/>
                           </Card> 
                 
                    </Col>
                    <Col md={4} sm={4}>
                    <Card style={{ width: 'auto',marginRight:'auto',marginLeft:'auto',backgroundColor:"wheat", color:"#513125" }}>
  
  <Card.Body    >
   
    <Card.Text style={{color:"#513125"}}>
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