import React from 'react';

const CollaborationSection = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-5 lg:px-20">
        
        {/* Section Title with clickable link */}
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          We collaborate with{' '}
          <a href="#collaborators" className="text-blue-600 underline hover:text-blue-800">
            leading companies and institutions
          </a>
        </h2>
        
        {/* Logos Section with 3 images per row on small screens */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <img 
            src="/img/google.png" 
            alt="Google" 
            className="h-16 md:h-24 max-w-[150px] w-full object-contain"
          />
          <img 
            src="/img/facebook.png" 
            alt="Facebook" 
            className="h-16 md:h-24 max-w-[150px] w-full object-contain"
          />
          <img 
            src="/img/samsung.png" 
            alt="Samsung" 
            className="h-16 md:h-24 max-w-[150px] w-full object-contain"
          />
          <img 
            src="/img/ibm.png" 
            alt="IBM" 
            className="h-16 md:h-24 max-w-[150px] w-full object-contain"
          />
          <img 
            src="/img/amazon.png" 
            alt="Amazon" 
            className="h-16 md:h-24 max-w-[150px] w-full object-contain"
          />
          <img 
            src="/img/microsoft.png" 
            alt="Microsoft" 
            className="h-16 md:h-24 max-w-[150px] w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
