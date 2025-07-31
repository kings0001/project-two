import React from 'react'
import { FaBars } from "react-icons/fa";
function Navbar() {
  return (
    <div>
     <header className='flex justify-between'>
        
        <div className='flex items-center '>
        
          <h1 className='text-3xl font-bold'>OEN.</h1>
          </div>
          

          <ul className='hidden lg:flex lg:items-center lg:gap-10 lg:texr-lg lg-font-medium'>
            <li>Locations</li>
            <li>Offerings</li>
            <li>Pricing </li>
            <li>About us </li>
          </ul>
          
          
          <div className='hidden lg:flex lg:items-center lg:gap-10 lg:texr-lg lg-font-medium'>
            <p>Login </p>
            <button className='bg-purple-900 px-2 py-1 font-medium rounded-md'>Register</button>
          </div>     
          <div className='text-3xl lg:hidden'> <FaBars /> </div>  
  </header>

    </div>
  )
}

export default Navbar