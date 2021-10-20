
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import YogaItem from './YogaItem';

const YogaShop = () => {
    const [yogaItems,setYogaItems]=useState([])
    useEffect(()=>{
        fetch("/yogashop.json")
        .then(res => res.json())
        .then(data => setYogaItems(data))
    },[])
    return (
        <div className="items ">
            <h1 className="pt-3">Yoga Shop</h1>
           <Row xs={1 } md={2} className="g-5 m-5">
            {
                yogaItems.map(yogaItem=><YogaItem 
                    key={yogaItem.id}
                    yogaItem={yogaItem}></YogaItem>)
            }
            </Row>
        </div>
    );
};

export default YogaShop;