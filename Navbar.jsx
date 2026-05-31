import React from "react";
import { Link } from "react-router-dom";
const Navbar =() => {
    return (
        <div>
            <header className='bg-blue-100 text-black-50 flex justify-between py-3 items-center'>
        <div>
            <img  src='blue.png' className='w-90 h-30'></img>
        </div>

        <div>
    <nav className='flex gap-4'>
        <Link to="/">Home</Link>
        <Link to="/aboutus">About us</Link>
        <Link to="/contactus">Contact us</Link>
        <Link to="/login">Login</Link>
    
    </nav>
    </div>
    </header>
      </div>
    )
}
export default Navbar