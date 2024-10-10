
import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="bg-white h-24 flex items-center justify-between px-4 relative drop-shadow-lg">
      <a className="font-extrabold text-3xl mb-2 mr-3 lg:mr-10 transition-transform duration-300 hover:scale-110 ease-in-out"  href="/">
        <b>SHOP.CO</b>
      </a>
      

      <div className='text-[#020817] text-[14px] hidden md:flex '> 
        <ul className='flex gap-6'>
          <li className='transition-transform duration-300 hover:scale-110 ease-in-out'>Shop</li>
          <li className='transition-transform duration-300 hover:scale-110 ease-in-out'>On Sell</li>
          <li className='transition-transform duration-300 hover:scale-110 ease-in-out'>New Arrivals</li>
          <li className='transition-transform duration-300 hover:scale-110 ease-in-out'>Brands</li>
        </ul>
      </div>

    
      <div className="flex items-center justify-center">
        <div className="relative">
          <input 
            type="text" 
            className="bg-[#F0F0F0] w-48 h-11 px-4 py-2 pl-10 border rounded-3xl focus:outline-none text-[12px] md:w-64" // Responsive width
            placeholder="Search for products..."
          />
          <div className="absolute left-3 top-2.5 text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 21a9 9 0 100-18 9 9 0 000 18zm7-4l5 5" />
            </svg>
          </div>
        </div>
      </div>

    
      <div className='flex gap-4 md:gap-6'> 
        <FiShoppingCart className='text-black text-[20px]' />
        <FaRegCircleUser className='text-black text-[20px]' />
      </div>
    </div>
  );
}

export default Header;


