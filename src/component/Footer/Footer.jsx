
import React from 'react'
import { Container,Row,Col } from 'reactstrap';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="footer">
    <Container>
     <Row>
      <col lg='4' md='4' sm='12'>
      <div className="logo" >
                <h1> 
                    <Link to='/home' className="d-flex align-items-center gap-3">
                    <i class="ri-car-line"></i> 
                    <span>Rent Car <br/> Service</span>
                    </Link>
                </h1>
                </div>  
      </col>
     </Row>
    </Container>
  </footer>
}

export default Footer;
