import React from 'react'
import './component.css'
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";


function Navbar() {

    const [showMenu, setShowMenu] = useState(false);

    const handleButtonToggle = () => {
        setShowMenu(!showMenu);
    };
    return (
        <>
            <div className='flex justify-evenly mt-8'>
                <div>
                    <h1 className='text-3xl text-gray-950'>CarRental</h1>
                </div>
                <div className={showMenu ? "menu-mobile" : "menu-web"} >
                    <ul className='flex gap-7 text-xl'>
                        <li>Home</li>
                        <li>Rent</li>
                        <li>Services</li>
                        <li>Ride</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='flex gap-5 text-xl '>
                    <button>Sign Up</button>
                    <button>Sign in</button>
                </div>

                <div className="ham-menu">
                    <button onClick={handleButtonToggle}>
                        <GiHamburgerMenu size={32}/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar