import React, { useEffect, useState } from 'react';
import Smilingwoman3 from '../assets/images/smiley-woman3.jpg'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import ScrollReveal from 'scrollreveal';

function Main_section() {
  
    useEffect(() => {
      const scroll = ScrollReveal({
        reset: true,
        duration: 2600,
        distance: '60px',
      });

  
      scroll.reveal('.image-transform', { delay: 400, origin: 'top' });
      scroll.reveal('.text-transform', { delay: 300, origin: 'left' });
    }, []);

    const[ headingText, setHeadingText] = useState("Hello");
    const[isMouseOver, setMouseOver] = useState(false);

    function handleClick(){
      setHeadingText( "whatsupp")
    }

    // to prevent the form from auto reload
    const handleSubmit = (e) => {
      e.preventDefault(); 
    };
    // mouse over function
    function handleMouseOver (){
      setMouseOver(true)
    }
    


    return (
      <main className='lg:flex'>
        <div className='flex items-center lg:flex-1 justify-center lg:justify-end lg:order-2 image-transform'>
          <img
            src={Smilingwoman3}
            alt="Smiling woman"
            className='outline outline-white shadow-2xl shadow-black lg:h-[450px] lg:w-[450px] lg:rounded-full scale-x-[-1]'
          />
        </div>
  
        <div className='space-y-6 mt-16 lg:mt-20 lg:flex-1 order-1 text-transform text-center lg:text-left'>
          <div className='text-5xl md:text-6xl font-bold leading-tight'>
            <h1>Let's switch<br />To remote</h1>
          </div>
          <p className='text-sm md:text-base'>
            {headingText}
          </p>
          <p className='text-sm md:text-base'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Corrupti, atque. Eum suscipit distinctio vitae sapiente tempora
            dolorem, numquam qui molestias quasi libero,
            quod quae ea cupiditate commodi reiciendis fugit. Maiores?
          </p>
          <form 
          onSubmit={handleSubmit}
          id='form'
          name='form'
          className='flex flex-col gap-2 md:flex-row md:gap-0'>
            <input
              type="text"
              placeholder='Enter city'
              className='max-md:rounded-md md:rounded-l-md px-4 py-3 bg-white text-black md:w-80'
            />
            <button
              
              onClick={handleClick}
              onMouseOver={handleMouseOver}
              className='max-md:rounded-md md:rounded-r-md bg-purple-900 px-4 py-3 font-medium whitespace-nowrap'>
              Find Your Office
            </button>
          </form>
          <div className='flex flex-col gap-1'>
            <p>Used by these companies:</p>
            <ul className='flex justify-center lg:justify-start gap-6 text-3xl py-5'>
              <li><FaXTwitter /></li>
              <li><FaFacebook /></li>
              <li><FaInstagram /></li>
              <li><FaWhatsapp /></li>
            </ul>
          </div>
        </div>
      </main>
    );
  }
  
  export default Main_section;