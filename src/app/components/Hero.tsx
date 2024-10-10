
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="bg-[#F2F0F1] relative md:px-4 min-h-[550px] bg-cover bg-top xl:bg-[center_top_-1.6rem] bg-no-repeat opacity-100 overflow-hidden flex items-center justify-between">
 
      <div className="flex-1 pl-6 md:pl-10 lg:pl-16">
        <h1 className="font-extrabold text-6xl mt-8">
          FIND <br /> CLOTHES <br />
          THAT <br />
          MATCH <br />
          YOUR STYLE
        </h1>
        <p className="text-medium text-gray-500 mt-6 max-w-lg leading-relaxed">
          Browse through our diverse range of meticulously crafted <br />
          garments, designed to bring out your individuality and cater to <br />
          your sense of style.
        </p>
        <button className="bg-gray-900 text-white w-2/5 md:w-2/5 h-14 py-2 mt-6 px-4 rounded-3xl hover:bg-gray-700  transition-transform duration-300 hover:scale-110 ease-in-out">
          Shop Now
        </button>
        

        <div className="flex items-center mt-8">
          <div className="flex flex-col items-center">
            <h3>
              <b>200+</b>
            </h3>
            <p className="text-[12px] text-gray-500">International Brands</p>
          </div>
          <div className="border-l border-gray-300 h-16 mx-4"></div> 
          <div className="flex flex-col items-center">
            <h3>
              <b>2,000+</b>
            </h3>
            <p className="text-[12px] text-gray-500">High-Quality Products</p>
          </div>
          <div className="border-l border-gray-300 h-16 mx-4"></div> 
          <div className="flex flex-col items-center">
            <h3>
              <b>3,000+</b>
            </h3>
            <p className="text-[12px] text-gray-500">Happy Customers</p>
          </div>
        </div>
      </div>

   
      <div className="relative flex-1 h-full">
   
        <div className="relative w-[240px] h-[340px] md:w-[350px] md:h-[450px] lg:w-[470px] lg:h-[620px]">
          <Image
            alt="Media star"
            src="/images/header-homepage.png"
            layout="fill" 
            objectFit="cover"
            className="mt-20 ml-1 rounded-lg" 
          />
        </div>

 
        <Image
          alt="Big star"
          width={75}
          height={75}
          src="/icons/big-star.svg"
          className="absolute right-11 top-8 animate-spin [animation-duration:4s]"
        />

   
        <Image
          alt="Small star"
          width={56}
          height={56}
          src="/icons/small-star.svg"
          className="absolute left-7 top-36 sm:top-64 md:top-44 lg:top-56 md:w-[40px] md:h-[40px] lg:w-[56px] lg:h-[56px] animate-spin [animation-duration:3s]"
        />
      </div>
    </main>
  );
};

export default Hero;

