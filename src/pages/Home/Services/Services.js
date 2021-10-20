import { Typography } from '@mui/material';
import { height } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'
import ServicesDetail from './ServicesDetail/ServicesDetail';

const Services = () => {
  const [services]=useServices()
 
    
    return (
      <div className="services">
           <h2 style={{marginBottom:"3%"}}>Our Main Services</h2>
      <Row xs={1} md={3} className="g-4">
         

{
  services.map(service =><Service
  key={service.id}
  service={service}
  ></Service>
 

  )
}
              
               
        </Row> 

         </div>
    );
};

export default Services;