import React, { useState } from 'react';
import './MeetOurInstructors.css'; // Import for custom styles

const instructors = [
  
  {
    name: 'Mr. xyz Verma',
    role: 'Data Science Expert',
    image: '/img/men.png', 
    bio: 'xyz specializes in data analysis and machine learning, guiding students through practical projects in Python and R.',
  },
  {
    name: 'Ms. abc Iyer',
    role: 'UI/UX Designer',
    image: '/img/women.png', 
    bio: 'With a keen eye for design, abc helps students understand the principles of UI/UX and how to create user-friendly applications.',
  },
  {
    name: 'Mr. def Patel',
    role: 'Machine Learning Specialist',
    image: '/img/men.png', 
    bio: 'def focuses on teaching the fundamentals of machine learning, from theory to practical implementations in real-world projects.',
  },
  {
    name: 'Ankit Dwivedi',
    role: 'Full-Stack Developer',
    image: '/img/ankit.jpg', 
    bio: 'Ankit Dwivedi has over 1 year of experience in full-stack development and has worked with various technologies, including React, Node.js, and MongoDB.',
  },
  {
    name: 'Ms. abc Iyer',
    role: 'UI/UX Designer',
    image: '/img/women.png', 
    bio: 'With a keen eye for design, abc helps students understand the principles of UI/UX and how to create user-friendly applications.',
  },
  {
    name: 'Mr. def Patel',
    role: 'Machine Learning Specialist',
    image: '/img/men.png', 
    bio: 'def focuses on teaching the fundamentals of machine learning, from theory to practical implementations in real-world projects.',
  },
];

const MeetOurInstructors = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const openModal = (instructor) => {
    setSelectedInstructor(instructor);
  };

  const closeModal = () => {
    setSelectedInstructor(null);
  };

  return (
    <section className="py-10 bg-indigo-50">
      <div className="container mx-auto px-5 lg:px-20">
        {/* Section Heading */}
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Meet Our Instructors
        </h2>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(instructor)}
            >
              <img
                src={instructor.image}
                alt={instructor.name}
                className="rounded-full w-32 h-32 mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">{instructor.name}</h3>
              <p className="text-sm text-gray-600">{instructor.role}</p>
            </div>
          ))}
        </div>

        {/* Modal for Instructor Bio */}
        {selectedInstructor && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2 className="text-2xl font-semibold">{selectedInstructor.name}</h2>
              <p className="text-sm text-gray-600">{selectedInstructor.role}</p>
              <p className="mt-4">{selectedInstructor.bio}</p>
              <button className="mt-4 btn-close" onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MeetOurInstructors;
