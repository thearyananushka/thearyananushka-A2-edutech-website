import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CoursesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 40px;
  background-color: #ffffff;
`;

const CourseCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 2px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;

const CourseTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
`;

const CourseDescription = styled.p`
  font-size: 16px;
  color: #777;
  margin-bottom: 20px;
`;

const CourseFee = styled.p`
  font-size: 20px;
  color: #2ECC71; /* Blue color for the fee */
  margin-bottom: 20px;
  font-weight: bold;
`;

const Button = styled.button`
  background-color: #1E88E5;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1976D2; 
  }
`;

const CourseImage = styled.img`
  width: 100%;
  height: 150px; /* Set height as needed */
  object-fit: cover; /* Cover to maintain aspect ratio */
  border-radius: 8px;
  margin-bottom: 15px;
`;

// Courses Page Component
const Courses = () => {
  const courseData = [
    {
      title: 'MERN Stack',
      description: 'Master full-stack development with MongoDB, Express, React, and Node.js for dynamic web apps.',
      fee: '34,999/-',
      link: "/course-Mern",
      image: 'https://wallpapercave.com/wp/wp8903890.jpg', // Add image URL here
    },
    {
      title: 'Data Analytics',
      description: 'Unlock data insights using Excel, SQL, and Python for impactful, data-driven decision-making.',
      fee: '19,999/-',
      link: "/course-DataAnalytics",
      image: "https://www.purplescape.com/wp-content/uploads/2022/08/Old-Blog-Banners-Purplescape-85.jpg", // Add image URL here
    },
    {
      title: 'Machine Learning',
      description: 'Learn cutting-edge algorithms and models to develop predictive machine learning applications.',
      fee: '44,999/-',
      link: "/course-ML",
      image: 'https://thumbs.dreamstime.com/b/machine-deep-learning-algorithms-artificial-intelligence-ai-automation-modern-technology-business-as-concept-134359416.jpg', // Add image URL here
    },
    {
      title: 'DevOps',
      description: 'Become proficient in CI/CD, Docker, and Kubernetes to automate deployments and boost efficiency.',
      fee: '14,999/-',
      link: "/course-Devops",
      image: 'https://t3.ftcdn.net/jpg/05/12/04/52/360_F_512045284_gsbCu75oyqHo59MccBltJe0sJRck1PPa.jpg', // Add image URL here
    },
    {
      title: 'QA Engineering',
      description: 'Master software testing, automation, and quality assurance techniques for delivering bug-free applications.',
      fee: '18,999/-',
      link: "/course-QA",
      image: 'https://www.shutterstock.com/image-illustration/quality-assurance-software-flow-qa-260nw-2324541683.jpg', // Add image URL here
    }
  ];

  return (
    <>
      {/* Section Heading */}
      <h2 className="text-xl font-bold text-center text-gray-600 mt-5 py-3">
          Featured Courses and Professional Certificates
        </h2>
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Learn with the Best
        </h2>
      <CoursesContainer>
        {courseData.map((course, index) => (
          <CourseCard key={index}>
            <CourseImage src={course.image} alt={course.title} />
            <CourseTitle>{course.title}</CourseTitle>
            <CourseDescription>{course.description}</CourseDescription>
            <CourseFee>Course Fee: {course.fee}</CourseFee>
            <Link to={course.link}>
              <Button>Enroll Now</Button>
            </Link>
          </CourseCard>
        ))}
      </CoursesContainer>
    </>
  );
};

export default Courses;
