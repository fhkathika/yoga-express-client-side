import { CardActionArea, CardActions, CardContent, CardMedia, IconButton, Button,Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import './YogaItem.css'
const YogaItem = ({yogaItem}) => {
    const {name,img,fee}=yogaItem
    return (
        <div >
         
<Card className="card-items gap-4 "  sx={{ maxWidth: 345  }} >
      <CardActionArea  className=" card-items gap-4 ">
        <CardMedia
          component="img"
          height="350"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {fee}
          </Typography>
          <button size="small"   color="black" className="button">
          Buy
        </button>
        </CardContent>
      </CardActionArea>
      
    </Card>

        </div>
    );
};

export default YogaItem;