import React, { useEffect } from "react";
import carimage from '../assets/carimage.png'
import play from '../assets/play.png'
import store from '../assets/store.jpg'
import { gsap } from "gsap";

function Home() {

  

  useEffect(() => {
    gsap.from(".box", {
      y: 70, 
      opacity: 1,
    });
    gsap.to(".box", {
      y: 0, 
      opacity: 1,
      duration: 1,
      stagger: 0.7, 
    });

    gsap.from(".car", {
      x: 100, 
      opacity: 1,
    });
    gsap.to(".car", {
      x: 0, 
      opacity: 1,
      duration: 2,
      stagger: 0.7, 
    });
  }, []);
  

  return (
    <>
       <div  className='flex flex-col-reverse md:flex-row justify-evenly md:mx-56 mx-0 md:gap-10 homeheight'>
       <div  className='space-y-8 mt-10 md:mt-40 mx-10 md:mx-0 ' >
        <h1  className='box text-5xl '>Looking to save more on your rental car?</h1>
        <p className='box text-xl'>Discover CarRental options in India with Rent a Car Select from a range of car options and local specials.</p>
       <div className='box flex flex-col md:flex-row gap-5 md:gap-0'>
       <img className='w-32' src={play} />
       <img className='w-32' src={store} />
       </div>
       </div>
       <div className='mt-10 bg-orange-600 rounded-3xl mx-7 md:mx-0'>
        <img src={carimage} className='car imagecar'/>
       </div>
       </div>
    </>
  )
}

export default Home