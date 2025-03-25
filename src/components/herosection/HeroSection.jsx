import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './HeroSection.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-5 lg:px-20">
        
        {/* Left Section: Text */}
        <div className="max-w-lg text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-6">
            Achieve Your Learning Goals
          </h1>
          
          {/* Learn and Courses Section */}
          <div className="text-base sm:text-lg text-gray-600 mb-6 lg:mb-8">
            <span className="font-bold text-xl">Learn </span>
            <span className="inline font-bold text-xl text-indigo-600">
              <Typewriter
                words={['Programming Languages', 'Web Development', 'Data Science', 'Machine Learning', 'UI/UX Design']}
                loop={0}
                cursor
                cursorStyle='|' 
                typeSpeed={100} 
                deleteSpeed={100} 
                delaySpeed={1500} 
              />
            </span>
          </div>

          <p className="text-base sm:text-lg text-gray-600 mb-6 lg:mb-8">
            Start, advance, or switch your career with a variety of courses, certifications, and degrees from top educators and institutions worldwide.
          </p>
          <button className="bg-blue-600 text-white py-3 px-6 sm:px-8 rounded text-base sm:text-lg hover:bg-blue-700 transition-colors">
            <Link to="/auth/a2/signup">Join For Free</Link>
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="relative lg:w-auto lg:mt-0 mt-8">
          {/* Foreground Image */}
          <img
            src="/img/hero3.png"
            alt="Learning illustration"
            className="relative w-48 h-auto sm:w-60 lg:w-72 "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
