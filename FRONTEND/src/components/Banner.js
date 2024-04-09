import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <div id="banner">
    <Container fluid  >
      <Row className="justify-content-center align-items-center ">
        <Col lg={12}>
          <Carousel>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 h-auto"
                src={require("../slider/1.jpg")}
                alt="First slide"
              />
              
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 h-auto"
                src={require("../slider/2.jpg")}
                alt="Second slide"
              />

              
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 h-auto"
                src={require("../slider/3.jpg")}
                alt="Third slide"/>
              </Carousel.Item>

            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 h-auto"
                src={require("../slider/4.jpg")}
                alt="Forth slide"/>
                        </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 h-auto"
                src={require("../slider/5.jpg")}
                alt="Fifth slide"/>
</Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 h-auto"
                src={require("../slider/6.jpg")}
                alt="Sixth slide"/>
</Carousel.Item>
          </Carousel>
        </Col>
      </Row>
     
    </Container>
    </div>
  );
};

export default Banner;
              
          

              
            
    