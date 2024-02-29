
 import React from 'react'
 import HeroSlider from '../component/UI/HeroSlider'
 import Helmet from '../component/Helmet/Helmet'
 const Home = () => {

   return (
     <Helmet title='Home'>
      <section className='p-0 hero_slider-section'>
        <HeroSlider />
      </section>
   </Helmet>
   );
 }
 
 export default Home
 