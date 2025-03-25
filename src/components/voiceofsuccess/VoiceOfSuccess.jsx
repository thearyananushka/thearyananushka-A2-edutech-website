import React, { useEffect } from 'react';
import './VoiceOfSuccess.css'; // Import for custom styles

const VoiceOfSuccess = () => {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Full-Stack Developer',
      feedback: 'The courses provided helped me to quickly master the technologies needed to build complex applications. I owe my success to these detailed lessons!',
    },
    {
      name: 'Ayush Patel',
      role: 'Data Scientist',
      feedback: 'I found the data science and AI courses extremely helpful. The practical projects truly helped me land my current role!',
    },
    {
      name: 'Ankit',
      role: 'Web Developer',
      feedback: 'The web development course was easy to follow and helped me become proficient in building responsive websites.',
    },
    {
      name: 'Riya jha',
      role: 'Machine Learning Engineer',
      feedback: 'The ML course opened many doors for me in the industry, with strong theoretical and practical concepts.',
    },
    {
      name: 'Amit Verma',
      role: 'Software Engineer',
      feedback: 'I was able to enhance my coding skills and got placed in a reputed company. Great platform for learning!',
    },
    {
      name: 'Roshni Agarwal',
      role: 'UI/UX Designer',
      feedback: 'The design courses gave me in-depth knowledge of UI/UX principles and boosted my confidence as a designer.',
    },
  ];

  // Duplicate testimonials for continuous scrolling
  const loopTestimonials = [...testimonials, ...testimonials, ...testimonials,  ...testimonials,  ...testimonials,  ...testimonials,  ...testimonials];

  // Auto-scroll effect
  useEffect(() => {
    const cardsContainer = document.getElementById('testimonialCards');
    let scrollInterval = setInterval(() => {
      cardsContainer.scrollLeft += 2;
      if (cardsContainer.scrollLeft >= cardsContainer.scrollWidth / 3) {
        cardsContainer.scrollLeft = 0; // Reset scroll when it reaches the third duplication
      }
    }, 20);

    // Stop scrolling on hover
    cardsContainer.addEventListener('mouseenter', () => clearInterval(scrollInterval));
    cardsContainer.addEventListener('mouseleave', () => {
      scrollInterval = setInterval(() => {
        cardsContainer.scrollLeft += 2;
      }, 20);
    });

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="bg-indigo-50 py-10">
      <div className="container mx-auto px-5 lg:px-20 relative">
        
        {/* Section Heading */}
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Voices of Success: Our Student's Journey
        </h2>

        
        <div 
          id="testimonialCards"
          className="flex overflow-x-auto space-x-4 scroll-smooth testimonial-scroll relative"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hides scrollbar
        >
          {loopTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-xs flex-shrink-0 bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{testimonial.name}</h3>
              <p className="text-sm text-blue-600 mb-1">{testimonial.role}</p>
              <p className="text-gray-600 text-sm">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoiceOfSuccess;
