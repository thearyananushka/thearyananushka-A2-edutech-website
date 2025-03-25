import React from 'react';
import { FaInstagram, FaYoutube, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      {/* Join Section */}
      {/* <div className="max-w-screen-xl mx-auto text-center bg-white text-black rounded-md py-5 mb-10">
        <div className="flex justify-between items-center px-8 md:px-12">
          <span className="text-lg font-medium">Join Us For Exclusive Courses and Offers!</span>
          <button className="bg-blue-600 text-white py-2 px-5 rounded-md hover:bg-red-500 transition">
            Join Now
          </button>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5 md:px-10">
        {/* A2 Pyramid Edutech */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">A2 Pyramid Edutech</h2>
          <hr className="border-gray-700 mb-4" />
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-blue-500 transition">Our Team</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Apply As Coach</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Hire From Us</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Our Alumni</a></li>
          </ul>
        </div>

        {/* Our Courses */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Our Courses</h2>
          <hr className="border-gray-700 mb-4" />
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-blue-500 transition">Front End</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Back End</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Full Stack</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">DSA</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Follow Us</h2>
          <hr className="border-gray-700 mb-4" />
          <ul className="space-y-3">
            <li className="flex items-center space-x-2 hover:text-pink-500 transition">
              <FaInstagram />
              <a href="#">Instagram</a>
            </li>
            <li className="flex items-center space-x-2 hover:text-red-500 transition">
              <FaYoutube />
              <a href="#">YouTube</a>
            </li>
            <li className="flex items-center space-x-2 hover:text-blue-500 transition">
              <FaFacebook />
              <a href="#">Facebook</a>
            </li>
            <li className="flex items-center space-x-2 hover:text-blue-500 transition">
              <FaLinkedin />
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <hr className="border-gray-700 mb-4" />
          <ul className="space-y-3">
            <li>Phone/Email</li>
            <li>+91 9472994483</li>
            <li>+91 9608049406</li>
            <li>studypyramid@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 text-sm">
        <hr className="border-gray-700 mb-4" />
        <p className='text-sm'>&copy; 2024 A2 Pyramid Edutech. All rights reserved.</p>
        <p className='text-sm'>Privacy Policy | Terms and Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
