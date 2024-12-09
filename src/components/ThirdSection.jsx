import React from 'react'
import carimage from '../assets/carimage.png'
import play from '../assets/play.png'
import store from '../assets/store.jpg'
import download from '../assets/download.png'

function ThirdSection() {
    return (
        <>
            <div className='mt-20 md:mx-56 md:gap-10  bg-orange-600 rounded-3xl mx-7 ' style={{maxHeight:"350px"}}>
                
                    
                <div className='flex justify-around' >
                <div className='mx-10 md:mx-0 ' >
                
                    <h1 className='text-2xl md:text-5xl text-white pl-0 md:pl-10 pt-3 md:pt-10'>Download the free RentalX <br />app</h1>
                    <p className='md:text-xl text-white  md:pl-10 md:pt-7'>Download the RentalX app to manage your bookings, find exclusive deals,<br />and access 24/7 support, all from your mobile device.</p>
                    <div className='flex  gap-5 pl-0 md:pl-10 pt-10 pb-16'>
                        <img className='w-24 md:w-32' src={play} />
                        <img className='w-24 md:w-32' src={store} />
                    </div>
                </div>
                <div>
                    <img src={download} className='w-72 -my-32 hidden md:block'/>
                </div>
                </div>
            </div>
        </>
    )
}

export default ThirdSection