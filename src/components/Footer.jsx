import React from 'react'

function Footer() {
  return (
    <>
    <div className='flex flex-col md:flex-row m-10 gap-9 md:gap-0 md:mx-56 md:mt-56 md:mb-20 justify-between '>
        <div className='space-y-4'>
            <h1 className='text-2xl'>Our Products</h1>
            <p className='text-xl'>Career</p>
            <p className='text-xl'>Hotels</p>
            <p className='text-xl'>Cars</p>
            <p className='text-xl'>Packages</p>
            <p className='text-xl'>Features</p>
            <p className='text-xl'>Priceline</p>
           
        </div>

        <div className='space-y-4'> 
            <h1 className='text-2xl'>About RentalX</h1>  
            <p className='text-xl'>Why RentalX</p>
            <p className='text-xl'>Our Story</p>
            <p className='text-xl'>Investors</p>
            <p className='text-xl'>Press Centers</p>
            <p className='text-xl'>Advertise</p>          
        </div>

        <div className='space-y-4'>
            <h1 className='text-2xl'>Resources</h1>
            <p className='text-xl'>Download</p>
            <p className='text-xl'>Help Centers</p>
            <p className='text-xl'>Guides</p>
            <p className='text-xl'>Partner Network</p>
            <p className='text-xl'>Mechanics</p>
            <p className='text-xl'>Developer</p>
        </div>

        <div className='space-y-4'>
            <h1 className='text-2xl'>Extras</h1>
            <p className='text-xl'>Rental Deal</p>  
            <p className='text-xl'>Repair Shop</p>
            <p className='text-xl'>View Booking</p>
            <p className='text-xl'>Hire Companies</p>
            <p className='text-xl'>New Offers</p>
        </div>
    </div>
    <div className='h-1 mx-56 bg-black'>
    <hr />
    </div>

    <div className='flex flex-col md:flex-row m-10 md:mx-56 my-12 justify-between '>
        <div>
            <h1 className='text-2xl'>RentalX</h1>
        </div>
        <div>
            <h1 className='mb-12 md:mb-0'>Copyright © 2024 Ketan Kumar. All rights reserved.</h1>
        </div>
    </div>
    </>
  )
}

export default Footer