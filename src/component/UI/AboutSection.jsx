import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import '../../styles/about-section.css'
import aboutImg from '../../assets/all-images/bmw-offer.png'

const AboutSection = () => {
  return (
  <section className='about__section '>
    <Container>
        <Row>
            <Col lg='6' md='6'>
                <div className="about_section-content">
                    <h4 className='section_subtitle'>About Us</h4> 
                    <h2 className="section_title">Welcome to car rent service</h2>
                    <p className="section_description">
                    Welcome to Shide, your go-to for seamless and dependable car rentals.
                    We prioritize an outstanding experience for all your transportation 
                    needs. Our diverse fleet, competitive rates, and dedication to 
                    customer satisfaction aim to make every journey unforgettable.
                      
                    </p>
                   <div className=' about_section-item d-flex align-items-center'> 
                          <p className="section_description d-flex align-items-center gap-2">
                          <i class="ri-checkbox-circle-line"></i>Welcome to Shide
                          </p>

                          <p className="section_description d-flex align-items-center gap-2">
                          <i class="ri-checkbox-circle-line"></i>Welcome to Shide
                          </p>
                   </div>

                   <div className=' about_section-item d-flex align-items-center'> 
                          <p className="section_description d-flex align-items-center gap-2">
                          <i class="ri-checkbox-circle-line"></i>Welcome to Shide
                          </p>

                          <p className="section_description d-flex align-items-center gap-2">
                          <i class="ri-checkbox-circle-line"></i>Welcome to Shide
                          </p>
                   </div>
         
                </div>
            </Col>

            <Col lg='6' md='6'>
                <div className="about_img">
                <img src={aboutImg} alt='' className='w-100'></img>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
  )
}

export default AboutSection
