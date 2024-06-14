import React from 'react'
import BodyPage from '..//Body/body';
import Herosection from '..//HeroSection/herosection';
import Navbar from '..//Navbar/navbar';
import Client from '..//clientSection/client';
import Community from '..//community/commuinty';
import Footer from '..//footer/footer';

const Render = () => {
  return (
    <>
    <Navbar/>
   <Herosection/>
   <Client/>
   <Community/>
   <BodyPage/>
   <Footer/>

    </>
  )
}

export default Render
