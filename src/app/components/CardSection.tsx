import React from "react";
import Image from "next/image"; // Assuming you're using next/image for Image component

const CardSection = () => {
  return (
    <section className="h-auto p-5 flex gap-5 justify-between mx-auto">
      {/* Card 1 */}
      <div className="bg-[#ffffff] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg">
        <div className="overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <Image
            src="/images/pic1.png"
            alt="black shirt"
            width={250}
            height={250}
            className="object-cover" // Maintain aspect ratio
          />
        </div>
        <h5 className="font-bold mt-2">T-shirt with Tap Details</h5>
        <p><b>$ 120</b></p>
        {/* Customer Review */}
        <div className="flex mt-2">
        <span className="text-yellow-500 text-lg mr-1">★★★★★</span>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-[#ffffff] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg">
        <div className="overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <Image
            src="/images/pic13.png"
            alt="Multi Color T-shirt"
            width={250}
            height={250}
            className="object-cover" // Maintain aspect ratio
          />
        </div>
        <h5 className="font-bold mt-2">Multi Color T-shirt</h5>
        <p><b>$ 110</b></p>
        {/* Customer Review */}
        <div className="flex mt-2">
        <span className="text-yellow-500 text-lg mr-1">★★★★★</span>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-[#ffffff] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg">
        <div className="overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <Image
            src="/images/pic3.png"
            alt="check shirt"
            width={250}
            height={250}
            className="object-cover" // Maintain aspect ratio
          />
        </div>
        <h5 className="font-bold mt-2">Chechered T-shirt</h5>
        <p><b>$ 120</b></p>
        {/* Customer Review */}
        <div className="flex mt-2">
        <span className="text-yellow-500 text-lg mr-1">★★★★★</span>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-[#ffffff] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg">
        <div className="overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <Image
            src="/images/pic4.png"
            alt="lining shirt"
            width={250}
            height={250}
            className="object-cover" // Maintain aspect ratio
          />
        </div>
        <h5 className="font-bold mt-2">Sleeve Striped T-shirt</h5>
        <p><b>$ 100</b></p>
        {/* Customer Review */}
        <div className="flex mt-2">
        <span className="text-yellow-500 text-lg mr-1">★★★★★</span>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
