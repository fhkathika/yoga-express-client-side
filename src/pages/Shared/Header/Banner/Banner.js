import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
  <Carousel.Caption >
      <h3>Welcome to our <span style={{color:"#513125"}}>Yoga Express</span></h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/y4MXdkX/meditation.jpg"
      alt=""
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/ZKppNtR/img4.jpg"
      alt=""
    />

    <Carousel.Caption>
      <h3 className="banner-caption">Yoga is a light, which once lit will never dim. The better your practice, the brighter your flame.</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/3Ws5xdX/man-sitting-at-sunrise.jpg"
      alt=""
    />

    <Carousel.Caption>
      <h3 className="banner-caption">The nature of yoga is to shine the light of awareness into the darkest corners of the body.</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;