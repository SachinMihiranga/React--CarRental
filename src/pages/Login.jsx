
import React from 'react'
import Slider from 'react-slick'
import { Container } from 'reactstrap'
import '../styles/login.css';



const Login = () => {
    const settings ={
        fade:true,
        speed: 2000,
        autoplaySpeed: 3000,
        infinite:true,
        autoplay:true,
        slidesToShow:1,
        slidesToScroll:1,
        pauseOnHver:false,
    }
  return (
  <Slider {...settings} className='hero_slider'>
    <div className='slider_item slider_item-01 mt0'>
            <div className='login_form'>
            <div className='bg-white p-3 rounded  col-6'>
            <h2>Login</h2>
            <form>
               
                <div className='mb-3'>
                <label htmlFor='firstName'>
                    <strong>Username</strong>
                </label>
                <input
                    type='text'
                    placeholder='Enter First Name'
                    autoComplete='off'
                    name='firstName'
                    id='firstNameInput'
                    onInput="updateName()"
                    className='form-control rounded-0'/>
            </div>

            

            <div className='mb-3'>
                <label htmlFor='firstName'>
                    <strong>Password</strong>
                </label>
                <input
                    type='text'
                    placeholder='Enter First Name'
                    autoComplete='off'
                    name='firstName'
                    id='firstNameInput'
                    onInput="updateName()"
                    className='form-control rounded-0'/>
            </div>

            <button type='submit' className='btn btn-success w-100 rounded-0'>
                   OK
                </button>
                
             </form>
             </div>
             </div>
       
    </div>

    
  </Slider>
  )
}

export default Login
