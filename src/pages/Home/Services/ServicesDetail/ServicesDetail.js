import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const ServicesDetail = () => {
    const {serviceId}=useParams()
   
//     const [services,setServices]=useState({})
//    useEffect(()=>{
//     fetch('../service.json')
//        .then(res => res.json())
//        .then(data =>console.log(data))
//    },[])
   
    return (
        <div>
            <h1>this is services:{serviceId}</h1>
            
       
            
            
        </div>
    );
};

export default ServicesDetail;