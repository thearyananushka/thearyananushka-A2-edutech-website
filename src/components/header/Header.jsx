import React from 'react';
import { FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-[#091E3E] text-white py-3 px-5 sticky top-0 z-50 shadow-lg md:flex hidden">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Contact Information Section */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <lord-icon
              src="https://cdn.lordicon.com/qxfeskio.json"
              trigger="loop"
              delay="2000"
              colors="primary:#ffffff"
              style={{ height: "24px", width: "24px" }}>
            </lord-icon>
            <span className="text-sm">Rukunpura, Bailey Road Patna, India</span>
          </div>
          <div className="flex items-center space-x-2">
            <lord-icon
              src="https://cdn.lordicon.com/srsgifqc.json"
              trigger="loop"
              delay="2000"
              colors="primary:#ffffff"
              style={{ height: "24px", width: "24px" }}>
            </lord-icon>
            <span className="text-sm">+91 9472994483</span>
          </div>
          <div className="flex items-center space-x-2">
            <lord-icon
              src="https://cdn.lordicon.com/xtzvywzp.json"
              trigger="loop"
              delay="2000"
              colors="primary:#ffffff"
              style={{ height: "24px", width: "24px" }}>
            </lord-icon>
            <span className="text-sm">studypyramid@gmail.com</span>
          </div>
        </div>
        
        {/* Social Media Icons Section */}
        <div className="flex space-x-4">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-transform duration-300 transform hover:scale-125">
            <FaYoutube className="text-lg" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-transform duration-300 transform hover:scale-125">
            <FaTwitter className="text-lg" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-transform duration-300 transform hover:scale-125">
            <FaLinkedinIn className="text-lg" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
