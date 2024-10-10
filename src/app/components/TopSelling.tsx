import React from 'react'
import Image from "next/image"; // Assuming you're using next/image for Image component
import { FaStar } from "react-icons/fa"; // Import FontAwesome star icon

const TopSelling = () => {
  return (
    <section className="h-auto p-5 flex gap-5 justify-between mx-auto">
    {/* Card 1 */}
    <div className="bg-[#ffffff] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg">
      <div className="overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <Image
          src="/images/pic5.png"
          alt="Vertical Striped Shirt"
          width={250}
          height={250}
          className="object-cover" // Maintain aspect ratio
        />
      </div>
      <h5 className="font-bold mt-2">Vertical Striped Shirt</h5>
      <p><b>$ 130</b></p>
      {/* Customer Review */}
      <div className="flex mt-2">
   
      <span className="text-yellow-500 text-lg mr-1">★★★★★</span>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-[#ffffff] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg">
      <div className="overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <Image
          src="/images/pic6.png"
          alt="Courage Graphic T-shirt"
          width={250}
          height={250}
          className="object-cover" // Maintain aspect ratio
        />
      </div>
      <h5 className="font-bold mt-2">Courage Graphic T-shirt</h5>
      <p><b>$ 100</b></p>
      {/* Customer Review */}
      <div className="flex mt-2">
      <span className="text-yellow-500 text-lg mr-1">★★★★★</span>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-[#ffffff] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg">
      <div className="overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <Image
          src="/images/pic7.png"
          alt="Loose Fit Bermuda Shorts"
          width={250}
          height={250}
          className="object-cover" // Maintain aspect ratio
        />
      </div>
      <h5 className="font-bold mt-2">Loose Fit Bermuda Shorts</h5>
      <p><b>$ 100</b></p>
      {/* Customer Review */}
      <div className="flex mt-2">
      <span className="text-yellow-500 text-lg mr-1">★★★★★</span>
      </div>
    </div>

    {/* Card 4 */}
    <div className="bg-[#ffffff] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg">
      <div className="overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <Image
          src="/images/pic12.png"
          alt="COLLAR T-SHIRT BLUE"
          width={250}
          height={250}
          className="object-cover" // Maintain aspect ratio
        />
      </div>
      <h5 className="font-bold mt-2">COLLAR T-SHIRT BLUE</h5>
      <p><b>$ 110</b></p>
      {/* Customer Review */}
      <div className="flex mt-2">
      <span className="text-yellow-500 text-lg mr-1">★★★★★</span>
      </div>
    </div>
  </section>
  )
}

export default TopSelling;