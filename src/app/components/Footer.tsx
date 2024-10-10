import React from "react";
import { FaTwitter, FaInstagram, FaGithub, FaFacebookF } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-[#F0F0F0] flex flex-col md:flex-row px-6 md:px-20 py-10 mt-16">
   
      <div className="flex flex-col md:flex-row gap-8 flex-1 mt-2">
        <div className="flex-1">
          <div className="mt-5">
            <h1 className="font-extrabold text-[34px]">SHOP.CO</h1>
            <p className="text-gray-500 text-[15px] mt-2">
              We have clothes that suit your style <br />
              and which you’re proud to wear. From <br />
              women to men.
            </p>
          </div>
          <br />
          <div className="flex space-x-4 mt-2"> 
     
            <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center outline outline-gray-300 hover:bg-black transition duration-300 ease-in-out">
              <FaTwitter className="text-black hover:text-white text-[18px]" />
            </div>
            <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center outline outline-gray-300 hover:bg-black transition duration-300 ease-in-out">
              <FaFacebookF className="text-black hover:text-white text-[18px]" />
            </div>
            <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center outline outline-gray-300 hover:bg-black transition duration-300 ease-in-out">
              <FaInstagram className="text-black hover:text-white text-[18px]" />
            </div>
            <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center outline outline-gray-300 hover:bg-black transition duration-300 ease-in-out">
              <FaGithub className="text-black hover:text-white text-[18px]" />
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col mr-10 mt-6 text-[16px] leading-9 flex-1">
          <a href="#_" className="font-bold mb-2">COMPANY</a>
          <a href="#_" className="text-gray-500 hover:text-gray-900 mb-1 text-[15px]">About</a>
          <a href="#_" className="text-gray-500 hover:text-gray-900 mb-1 text-[15px]">Features</a>
          <a href="#_" className="text-gray-500 hover:text-gray-900 mb-1 text-[15px]">Works</a>
          <a href="#_" className="text-gray-500 hover:text-gray-900 text-[15px]">Career</a>
        </div>

        <div className="flex flex-col mr-10 mt-6 text-[16px] leading-9 flex-1">
          <a href="#_" className="font-bold mb-2">HELP</a>
          <a href="#_" className="text-gray-500 hover:text-gray-900 mb-1 text-[15px]">Customer Support</a>
          <a href="#_" className="text-gray-500 hover:text-gray-900 mb-1 text-[15px]">Delivery Details</a>
          <a href="#_" className="text-gray-500 hover:text-gray-900 mb-1 text-[15px]">Terms & Conditions</a>
          <a href="#_" className="text-gray-500 hover:text-gray-900 text-[15px]">Privacy Policy</a>
        </div>

        <div className="flex flex-col mr-10 mt-6 text-[16px] leading-9 flex-1">
          <a href="#_" className="font-bold mb-2">FAQ</a>
          <a href="#_" className="text-gray-500 hover:text-gray-900 mb-1 text-[15px]">Account</a>
          <a href="#_" className="text-gray-500 hover:text-gray-900 mb-1 text-[15px]">Manage Deliveries</a>
          <a href="#_" className="text-gray-500 hover:text-gray-900 mb-1 text-[15px]">Orders</a>
          <a href="#_" className="text-gray-500 hover:text-gray-900 text-[15px]">Payments</a>
        </div>

        <div className="flex flex-col mt-6 text-[16px] leading-9 flex-1">
          <a href="#_" className="font-bold mb-2">RESOURCES</a>
          <a href="#_" className="text-gray-500 hover:text-gray-900 mb-1 text-[15px]">Free eBooks</a>
          <a href="#_" className="text-gray-500 hover:text-gray-900 mb-1 text-[15px]">Development Tutorial</a>
          <a href="#_" className="text-gray-500 hover:text-gray-900 mb-1 text-[15px]">How to - Blog</a>
          <a href="#_" className="text-gray-500 hover:text-gray-900 text-[15px]">YouTube Playlist</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
