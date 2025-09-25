import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home';
import About from './components/About';
import DietCards from './components/DietCards';
import Footer from './components/Footer'


const page = () => {
  return (
    <div className='bg-green-200 min-h-screen w-full'>
      <Nav/>
      <Home/>
      <About/>
      <DietCards/>
      <Footer/>
    </div>
  );
}

  


export default page
