import React from 'react';
import './JoinNow.css'; // Import for custom styles
import { Link } from 'react-router-dom';


const JoinNow = () => {
  return (
    <section className="flex items-center justify-center bg-indigo-50 py-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-5 lg:px-20">
        {/* Left Side Image */}
        <div className="flex-1">
          <img 
            src="/img/last_img.png" // Replace with your image URL
            alt="Join A2 Pyramid"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        
        {/* Text and Button Section */}
        <div className="flex-1 text-center lg:text-left mt-6 lg:mt-0 lg:pl-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Take the Next Step Toward Your Professional Goals with A2 Pyramid
          </h2>
          <p className="text-gray-600 mb-6">
            Join now to receive personalized recommendations from the full A2 Pyramid catalog.
          </p>
          <Link to="/auth/a2/signup" className="bg-indigo-600 mt-16 text-white px-6 py-3 rounded-lg hover:bg-indigo-500 transition duration-300">
            Join for Free
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinNow;
