
import React from 'react'
import Slider from 'react-slick'
import { Container } from 'reactstrap'
import '../styles/signup.css';



const Signup = () => {
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
            <div className='register_form'>
            <div className='bg-white p-3 rounded  col-6'>
            <h2>Register</h2>
            <form>
               
                <div className='mb-3'>
                <label htmlFor='firstName'>
                    <strong>Full Name</strong>
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
                    <label htmlFor='email'>
                        <strong>Email</strong>
                    </label>
                    <input
                    type='text'
                    placeholder='Enter Name'
                    autoComplete='off'
                    name='email'
                    className='form-control rounded-0'/>
                </div>

                <div className='mb-3'>
                    <label htmlFor='email'>
                        <strong>Age</strong>
                    </label>
                    <input
                    type='text'
                    placeholder='Enter Name'
                    autoComplete='off'
                    name='email'
                    className='form-control rounded-0'/>
                </div>

                <div className='mb-3'>
                    <label htmlFor='email'>
                        <strong>City</strong>
                    </label>
                    <input
                    type='text'
                    placeholder='Enter Name'
                    autoComplete='off'
                    name='email'
                    className='form-control rounded-0'/>
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>
                    Register
                </button>
                
             </form>
             </div>
             </div>
       
    </div>

    
  </Slider>
  )
}

export default Signup
