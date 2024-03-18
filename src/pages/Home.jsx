
 import React from 'react'
 import HeroSlider from '../component/UI/HeroSlider'
 import Helmet from '../component/Helmet/Helmet'

import { Container, Row, Col } from 'reactstrap'
import FindCarForm from '../component/UI/FindCarForm'
import AboutSection from '../component/UI/AboutSection'
import ServiceList from '../component/UI/ServiceList'
import  carData from '../assets/data/carData'
import  CarItem from '../component/UI/CarItem'
import BecomeDriverSection from '../component/UI/BecomeDriverSection'

 const Home = () => {

   return (
     <Helmet title='Home'>

      {/* ========== hero section ========== */}
      <section className='p-0 hero_slider-section'>
        <HeroSlider />
        <div className="hero_form">
          <Container>
            <Row className='form_row'>
               <Col lg='4' md='4'>
                 <div className='find_cars-left'>
                  <h2>Find your best car here</h2> 
                 </div>
               </Col>
               <Col lg='8' md='8' sm='12'>
                  <FindCarForm/>
               </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/*============about section===========*/ }
      <AboutSection/>

      {/* ================service section=============== */}
      <Container>
        <Row>
          <Col lg='12' className='mb-5 text-center' >
            <h6 className='section_subtitle'>See our</h6>
            <h2 className='section_title'>Popular services</h2>
          </Col>
          <ServiceList/>
        </Row>
      </Container>

      {/* ============= car offer section =============*/}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h6 className='section_subtitle'>Come with</h6>
              <h2 className='section_title'>Hot Offers</h2>
            </Col>
            {carData.map((item)=>(
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
      {/* ========== become a driver section =========== */}
       <BecomeDriverSection/>
   </Helmet>
   );
 }
 
 export default Home
 