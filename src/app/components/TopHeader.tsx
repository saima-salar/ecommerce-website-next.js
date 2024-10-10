
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const TopHeader = () => {
  return (
    <header className="bg-black text-white p-2 h-10 flex justify-center items-center relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-xs sm:text-sm md:text-base">
          Sign up and get 20% off your first order.{' '}
          <span className="underline cursor-pointer">Sign Up Now</span>
        </p>
      </div>
      <div className="absolute right-4 ">
        <AiOutlineClose size={20} />
      </div>
    </header>
  );
};

export default TopHeader;



