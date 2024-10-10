import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <nav className="bg-black text-white text-center mt-20 h-24 relative flex justify-evenly items-center py-10 space-x-4">
      <div className="relative w-32 h-32 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-4 transition-transform duration-300 hover:scale-125 ease-in-out"> 
        <Image
          alt="Versace Logo"
          src="/icons/versace-logo.svg"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div className="relative w-32 h-32 md:w-26 md:h-26 lg:w-32 lg:h-32 mx-4 transition-transform duration-300 hover:scale-125 ease-in-out"> 
        <Image
          alt="Zara Logo"
          src="/icons/zara-logo.svg"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div className="relative w-32 h-32 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-4 transition-transform duration-300 hover:scale-125 ease-in-out"> 
        <Image
          alt="Gucci Logo"
          src="/icons/gucci-logo.svg"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div className="relative w-32 h-32 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-4 transition-transform duration-300 hover:scale-125 ease-in-out"> 
        <Image
          alt="Prada Logo"
          src="/icons/prada-logo.svg"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div className="relative w-32 h-32 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-4 transition-transform duration-300 hover:scale-125 ease-in-out"> 
        <Image
          alt="Calvin Klein Logo"
          src="/icons/calvin-klein-logo.svg"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    </nav>
  )
}

export default Banner;

