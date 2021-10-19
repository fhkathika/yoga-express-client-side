import { CardContent,Card, CardHeader, CardMedia, Typography } from '@mui/material';
import { borderRadius } from '@mui/system';
import React from 'react';
import {  CardGroup, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {id,name,img,Detail}=service
    return (
        <div>
    <Card sx={{ maxWidth: 345, height:'450' ,borderRadius:'5%',color:"#fffde7",boxShadow:3}}>
      <CardHeader sx={{color:"#513125"}}
       
       title={name}
    
      />
      <CardMedia className="card-service"
        component='img'
        height="194"
        image={img}
     
        alt=""
      />
      <CardContent className="card-service" sx={{ backgroundColor:"#513125" }}>
        <Typography variant="body2" color="wheat" >
        {Detail}
        </Typography>
        <Link to={`/service/${id}/${name}/${Detail}/${img.jpg}`}
        // {{
        //   pathname: "/service",
        //   search: "?sort=id",
        //   hash: "#the-hash",
        //   state: { fromDashboard: true }
        // }}
        
        >
       
        <button className="card-service" style={{backgroundColor:"goldenrod",color:"#513125" ,borderRadius:"5px",marginTop:"8px"}}>See Details</button>
        </Link>
      </CardContent>
    
   
    </Card>

 

        </div>
    );
};

export default Service;