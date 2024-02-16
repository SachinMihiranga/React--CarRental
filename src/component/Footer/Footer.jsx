
import React from 'react'
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../styles/footer.css';

const quickLinks =[
  {
    path:'/about',
    display:'About'
  },

  {
    path:'#',
    display:'Privacy Policy'
  },

  {
    path:'/cars',
    display:'Car Listing'
  },

  {
    path:'/blogs',
    display:'Blogs'
  },

  {
    path:'/contact',
    display:'Contact'
  },

]

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="footer">
    <Container>
     <Row>
      <Col lg='4' md='4' sm='12'>
      <div className="logo" >
                <h1> 
                    <Link to='/home' className="d-flex align-items-center gap-3">
                    <i class="ri-car-line"></i> 
                    <span>Rent Car <br/> Service</span>
                    </Link>
                </h1>
                </div>
                <p className="footer_logo-content">
                Discover the joy of seamless journeys with our premium car rental services. 
                At [Your Company Name], we redefine travel convenience by offering a fleet 
                of meticulously maintained vehicles that cater to your every need. Whether 
                it's a business trip or a leisurely drive, our commitment to excellence 
                ensures a smooth and enjoyable ride.
                </p>
      </Col>

      <Col lg='2' md='4' sm='6'>
        <div className="mb-4">
          <h5 className="footer_link-title">Quick Links</h5>
           <ListGroup>
            {
           quickLinks.map((item, index) => (
            <ListGroupItem key={index} className='p-0 mt-3 quick_link'>
               <Link to={item.path}>{item.display}</Link>
            </ListGroupItem>
           ))
           }
           </ListGroup>
        </div>
      </Col>

      <Col  lg='3' md='4' sm='6'>
        <div className="mb-4">
        <h5 className="footer_link-title">Head Office</h5>
        <p className="office_info">
        SHIDE (pvt)Ltd, D.R. Wijewardena Mawatha Colombo 10 
        </p>
        <p className="office_info">
        Phone: +94 767841061 
        </p>
        <p className="office_info">
        Email: sachinmihiranga2000@gmail.com 
        </p>
        <p className="office_info">
        Office Time: 8.30am - 7pm
        </p>
        </div>
      </Col>

      <Col lg='3' md='4'>
        <div className="mb-4">
        <h5 className="footer_link-title">Newsletter</h5>
        <p className="section_description">
          Subscribe our newsletter
        </p>
        <div className="newsletter">
          <input type='email' placeholder='Email'/>
          <span><i class="ri-send-plane-line"></i></span>
        </div>
        </div>
      </Col>
      <Col lg="12">
        <div className='footer_bottom'>
          <p className='section_description d-flex align-items-center 
          justify-content-center gap-1 pt-4'>
            <i class="ri-copyright-line"></i>Copyright {currentYear},
            Developed by
            Sachin Mihiranga. All rights reserved.
          </p>

        </div>
      </Col>
     </Row>
    </Container>
  </footer>
}

export default Footer;
