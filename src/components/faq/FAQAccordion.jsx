import React, { useState } from 'react';
import './FAQAccordion.css'; // Import for custom styles

const FAQs = [
  {
    question: 'What is the purpose of this platform?',
    answer: 'This platform is designed to help students learn various technologies through comprehensive courses and hands-on projects.',
  },
  {
    question: 'How can I enroll in a course?',
    answer: 'You can enroll in a course by creating an account and selecting the course you want to take from our catalog.',
  },
  {
    question: 'What support is available for students?',
    answer: 'We offer 24/7 support through our online chat and email services, as well as community forums for peer assistance.',
  },
  {
    question: 'Are there any prerequisites for the courses?',
    answer: 'Some courses may have prerequisites, which will be listed in the course description. However, most courses are beginner-friendly.',
  },
  {
    question: 'Will I receive a certificate after completing a course?',
    answer: 'Yes, upon successful completion of a course, you will receive a certificate that you can share on your LinkedIn profile.',
  },
  {
    question: 'Can I access course materials after the course ends?',
    answer: 'Yes, all enrolled students will have lifetime access to course materials and updates.',
  },
  {
    question: 'How do I reset my password?',
    answer: 'You can reset your password by clicking the "Forgot Password" link on the login page and following the instructions.',
  },
  {
    question: 'Is there a refund policy?',
    answer: 'Yes, we have a 30-day money-back guarantee if you are not satisfied with the course.',
  },
];

const FAQAccordion = () => {
  const [expandedQuestions, setExpandedQuestions] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const toggleQuestion = (index) => {
    setExpandedQuestions((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index); // Collapse if already expanded
      } else {
        return [...prev, index]; // Expand the question
      }
    });
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedFAQs = showAll ? FAQs : FAQs.slice(0, 3);

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-5 lg:px-20">
        {/* Section Heading */}
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>

        {/* Accordion Section */}
        <div className="space-y-4">
          {displayedFAQs.map((faq, index) => (
            <div key={index} className="accordion-item bg-white rounded-lg shadow-md">
              <div className="accordion-header flex justify-between items-center p-4 cursor-pointer" onClick={() => toggleQuestion(index)}>
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                <span className="text-gray-600">{expandedQuestions.includes(index) ? '-' : '+'}</span>
              </div>
              {expandedQuestions.includes(index) && (
                <div className="accordion-body p-4">
                  <p className="text-gray-600 text-sm font-bold">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* See More Button */}
        <button
          className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg transition-colors duration-300 hover:bg-indigo-500"
          onClick={toggleShowAll}
        >
          {showAll ? 'See Less' : 'See More'}
        </button>
      </div>
    </section>
  );
};

export default FAQAccordion;
