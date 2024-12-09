import React from 'react'
import car from '../assets/service.png'
import { IoMdPricetag } from "react-icons/io";
import { FaMoneyCheck } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

function FirstSection() {

    
  return (
    <>
    <div className='flex flex-col md:flex-row mx-0 md:mx-56 sectionheight'>
        <div className='mt-16 mx-7 md:mx-0'>
            <img className='carimage' src={car} />
        </div>
        <div className='space-y-6 md:ml-12 mx-7 md:mx-0 mt-12 md:mt-0 '>
            <div className='space-y-5'>
                <h2 className='text-xl'>BEST SERVICES</h2>
                <h1 className='text-4xl'>Feel the best experience with our rental deals</h1>
            </div>
            <div className='flex gap-5 justify-center items-center'>
                <div>
                <IoMdPricetag size={32}/>
                </div>
                <div className='space-y-2'>
                    <h2 className='text-xl text-gray-950'>Deals for every budget</h2>
                    <h1>From economy cars to luxury vehicles, we have something for everyone, ensuring you get the best value for your money.</h1>
                </div>
            </div>

            <div className='flex gap-5 justify-center items-center'>
                <div>
                <FaMoneyCheck size={32}/>
                </div>
                <div className='space-y-2'>
                    <h2 className='text-xl text-gray-950'>Best price guarantee</h2>
                    <h1>We ensure you get competitive rates in the market, so you can book with confidence knowing you're getting the best deal.</h1>
                </div>
            </div>


            <div className='flex gap-5 justify-center items-center'>
                <div>
                <BiSupport size={32}/>
                </div>
                <div className='space-y-2'>
                    <h2 className='text-xl text-gray-950'>Support 24/7</h2>
                    <h1>Our dedicated team is available 24/7 to assist you with any questions or concerns, ensuring a smooth rental experience.</h1>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default FirstSection