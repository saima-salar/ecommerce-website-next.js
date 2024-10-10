// import React from 'react';
// import { FaEnvelope } from 'react-icons/fa'; // Import the envelope icon

// const Newsletter = () => {
//   return (
//     <div className="bg-black text-white flex flex-col md:flex-row rounded-3xl p-6 md:h-64 mt-20 gap-16 ">
//       {/* Left Section */}
//       <div className="flex-1 flex items-center justify-center md:justify-start ml-10">
//         <p className='text-center md:text-left font-extrabold text-3xl md:text-4xl leading-tight'>
//           STAY UP TO DATE <br /> ABOUT OUR <br /> LATEST OFFERS
//         </p>
//       </div>

//       {/* Right Section */}
//       <div className="flex flex-col justify-center items-center md:items-start flex-1 md:ml-10">
//         <div className="relative w-full md:w-64 mb-4">
//           <FaEnvelope className='absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 text-center' />
//           <input
//             className='rounded-3xl h-12 w-full pl-10 pr-4 text-black text-center'
//             type="text"
//             placeholder='Enter your email address:'
//           />
//         </div>
//         <button className='bg-white rounded-3xl text-black h-12 w-full md:w-64 flex items-center justify-center'>
//           Subscribe to Newsletter
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Newsletter;

import React from 'react';
import { FaEnvelope } from 'react-icons/fa'; // Import the envelope icon

const Newsletter = () => {
  return (
    <div className="bg-black text-white flex flex-col md:flex-row rounded-3xl p-8 md:h-64 mt-20 gap-8">
      {/* Left Section */}
      <div className="flex-1 flex items-center justify-center md:justify-start md:ml-10">
        <p className='text-center md:text-left font-extrabold text-3xl md:text-4xl leading-tight'>
          STAY UP TO DATE <br /> ABOUT OUR <br /> LATEST OFFERS
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-center md:items-start flex-1 md:ml-10">
        <div className="relative w-full md:w-64 mb-4">
          <FaEnvelope className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 '  />
          <input
            className='rounded-3xl h-12 w-full pl-10 pr-4 text-black text-center   transition-transform duration-300 hover:scale-110 ease-in-out '
            type="text"
            placeholder='Enter your email address:'
          />
        </div>
        <button className='bg-white rounded-3xl text-black h-12 w-full md:w-64 flex items-center justify-center space-x-2 transition-transform duration-300 hover:scale-110 ease-in-out'>
          <span>Subscribe to Newsletter</span>
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
