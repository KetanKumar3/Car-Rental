import React from 'react'
import carimage from '../assets/experience.png'
import { IoMdPricetag } from "react-icons/io";

function SecondSection() {
    return (
        <>
            <div>
                <h1 className='text-center text-xl md:text-2xl py-3'>CUSTOMER EXPERIENCE</h1>
                <h1 className='text-center text-3xl md:text-5xl'>We are ensuring the best <br />customer experience</h1>
            </div>
            
            <div className='flex justify-center items-center'>
            <div>
                <img className='w-80 py-20' src={carimage} />
            </div>
            </div>
        </>
    )
}

export default SecondSection