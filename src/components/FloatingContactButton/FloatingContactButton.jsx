import React, { useState } from 'react';
import { FaPhone, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'; // Keep these icons for WhatsApp and Phone
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the icon visibility
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden flex items-center"> {/* Visible only on mobile devices (md:hidden) */}
      
      {/* Conditional rendering of WhatsApp and Phone icons */}
      {isOpen && (
        <div className="flex space-x-4 mr-4"> {/* Opens left with space-x-4 */}
          <a
            href="https://wa.me/your-whatsapp-number"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 p-4 rounded-full shadow-lg text-white hover:bg-green-600 transition duration-300"
          >
            <FaWhatsapp className="text-xl" />
          </a>
          <a
            href="tel:+919999999999"
            className="bg-blue-600 p-4 rounded-full shadow-lg text-white hover:bg-blue-700 transition duration-300"
          >
            <FaPhoneAlt className="text-xl" />
          </a>
        </div>
      )}

      {/* Main Floating Button with PNG */}
      <div
        onClick={handleToggle}
        className="bg-blue-600 p-3 rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition duration-300"
      >
        {/* <img
          src="/img/contact-icon.png" // Replace with the path to your PNG
          alt="Contact Us"
          className="w-8 h-8 object-contain " // Adjust the size as needed
        /> */}
        {/* <ConnectWithoutContactIcon style={{ color: 'white', fontSize: '24px' }} /> */}
        <FaPhone style={{ color: 'white', fontSize: '20px' }} />
        </div>
      
    </div>
  );
};

export default FloatingContactButton;
