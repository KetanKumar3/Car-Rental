import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaRegCalendarCheck } from "react-icons/fa";
import { BsFillBookmarkStarFill } from "react-icons/bs";

function Cards() {
  return (
    <>
    <div className='mt-20 '>
    <div className='space-y-4'>
    <h3 className='text-center text-xl'>HOW IT WORKS</h3>
    <h1 className='text-center text-4xl'>Rentgo following 3 working steps</h1>
    </div>
    <div className='flex flex-col md:flex-row md:mx-56 mx-0 justify-between text-center my-16 gap-10 md:gap-0'>
        <div className='md:w-1/4 flex flex-col justify-center items-center gap-3 mx-3 md:mx-0'>
            <CiLocationOn size={32}/>

            <h1 className='text-xl text-slate-950'>Choose a location</h1>
            <h4>Select your desired rental location from our extensive network of car rental spots.</h4>
        </div>
        <div className='md:w-1/4 flex flex-col justify-center items-center gap-3 mx-7 md:mx-0'>
            <FaRegCalendarCheck size={32}/>
            

            <h1 className='text-xl text-slate-950'>Pick-up date</h1>
            <h4>Specify the date and time you wish to pick up your car with flexible scheduling options.</h4>
        </div>
        <div className='md:w-1/4 flex flex-col justify-center items-center gap-3 mx-7 md:mx-0'>
            <BsFillBookmarkStarFill size={32}/>

            <h1 className='text-xl text-slate-950'>Book your car</h1>
            <h4>Browse through our wide range of vehicles and choose the one that best suits your needs.</h4>
        </div>
    </div>
    </div>
    </>
  )
}

export default Cards