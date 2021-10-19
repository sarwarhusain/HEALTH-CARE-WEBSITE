import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import banner1 from '../../../images/Banners/banner1.jpg'
import banner2 from '../../../images/Banners/banner2.jpg'
import banner3 from '../../../images/Banners/banner3.png'


const Banner = () => {
  return (
    <>
      <Container fluid="md">
        <Row>
          <Col><Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={banner1}
                alt="First slide"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={banner2}
                alt="Second slide"
              />


            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={banner3}
                alt="Third slide"
              />


            </Carousel.Item>
          </Carousel></Col>
        </Row>
      </Container>
      <hr/>

    </>
  );
};

export default Banner;