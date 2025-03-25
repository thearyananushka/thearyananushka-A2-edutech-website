import React from 'react';
import './FeaturedPrograms.css'; // Custom styles for hover and zoom effects

const FeaturedPrograms = () => {
  const programs = [
    {
      title: 'Full-Stack Development',
      description: 'Master front-end and back-end technologies to build complete web applications.',
      duration: '6 Months',
      level: 'Intermediate',
    },
    {
      title: 'Data Science & Analytics',
      description: 'Learn data manipulation, machine learning algorithms, and business intelligence tools.',
      duration: '8 Months',
      level: 'Advanced',
    },
    {
      title: 'Artificial Intelligence',
      description: 'Dive deep into AI algorithms, neural networks, and automation with hands-on projects.',
      duration: '12 Months',
      level: 'Advanced',
    },
    {
      title: 'Cyber Security',
      description: 'Understand network security, ethical hacking, and protection against cyber threats.',
      duration: '5 Months',
      level: 'Intermediate',
    },
    {
      title: 'Cloud Computing',
      description: 'Learn to deploy, manage, and secure applications in cloud platforms like AWS, Azure, and GCP.',
      duration: '7 Months',
      level: 'Advanced',
    },
    {
      title: 'Mobile App Development',
      description: 'Develop native and cross-platform mobile apps using Flutter, React Native, and more.',
      duration: '4 Months',
      level: 'Beginner',
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-5 lg:px-20">
        
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Explore Our Featured Programs
        </h2>

        {/* Program Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="program-card transition-transform duration-300 ease-in-out p-6 bg-white rounded-lg shadow-md hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">{program.title}</h3>
              <p className="text-gray-600 mb-3">{program.description}</p>
              <p className="text-gray-500 text-sm mb-1"><strong>Duration:</strong> {program.duration}</p>
              <p className="text-gray-500 text-sm"><strong>Level:</strong> {program.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
