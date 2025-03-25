import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 50px;
  margin-bottom: 10px;
  padding-top: 10px;
  background-image: url('https://media.istockphoto.com/id/1281736074/vector/abstract-geometric-pattern-background.jpg?s=612x612&w=0&k=20&c=rTHAuJPGgbaGZCDh6PAoVkJr3mTvn5WppwDHAPfNgoU='); 
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: center; 

  @media (max-width: 768px) {
    padding: 20px; 
  }
`;

const Header = styled.div`
  text-align: left;
  color: white;
  width: 100%;
  margin-bottom: 20px;
`;

const MainTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  color: Green;
  margin-bottom: 20px;
  font-weight:bold;

  @media (max-width: 768px) {
    font-size: 1.5rem; 
    text-align:center;
  }
`;

const SubTitle = styled.p`
  color: #36454F; 
  font-size: 1.2rem;
  margin: 0;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1rem; 
  }
`;

const Highlight = styled.span`
  color: black;
  font-weight: 600;
`;
const BoldText = styled.p`
  font-weight: bold;
  color: green; 
  font-size: 1rem; 
  margin: 0;
  margin-bottom: 20px;
`;


const InfoContainer = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
margin-top: 20px;

@media (max-width: 768px) {
  flex-direction: column-reverse; 
  align-items: center;
  }
`;

const InfoText = styled.div`
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%; 
    text-align: center; 
  }
`;

const BrochureButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 1rem; 
    padding: 8px 16px; 
  }
`;

const BannerImage = styled.img`
 
  max-width: 45%;
  height: auto;
  border-radius: 15px;
  margin-right: 30px;
  border: 5px solid white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);

  @media (max-width: 768px) {
    max-width: 100%;  
    margin-right: 0;  
    margin-bottom: 20px; 
  }
`;

const Footer = styled.div`
  color: red;
  font-size: 1rem;
  margin-top: 20px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 0.9rem; 
  }
`;

// Machine Component
const Mern = () => {
  return (
    <>
      <Container>
        <InfoContainer>
          <InfoText>
            <Header>
              <MainTitle>Quality Assurance <br /><br/> Engineering</MainTitle>
            </Header>
 <br/>
            <p>6 Months  • Online  • 100% Live Sessions</p>
            <br/>
            <BoldText>Course Fee: 18,999/-</BoldText>
            <BrochureButton>Pay Now</BrochureButton>
          </InfoText>
          <BannerImage
            src="https://www.interviewbit.com/blog/wp-content/uploads/2021/08/QA-Engineer-800x391.jpg" />
        </InfoContainer>
      </Container>
    </>
  );
};

// Specialization Container
const SpecializationContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white; 
  background-image: url('https://media.istockphoto.com/id/1281736074/vector/abstract-geometric-pattern-background.jpg?s=612x612&w=0&k=20&c=rTHAuJPGgbaGZCDh6PAoVkJr3mTvn5WppwDHAPfNgoU='); 
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: center; 
  padding: 10%;
  padding-top: 10px;

  @media (max-width: 768px) {
    padding: 5%; 
  }
`;

const CourseListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CourseContainer = styled.div`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  cursor: pointer;
  margin-top: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); 

  @media (max-width: 768px) {
    padding: 10px; 
  }
`;

const CourseTitle = styled.h3`
  font-size: 1.4rem;
  margin: 0;
  color: #333;
  text-align:center;

  @media (max-width: 768px) {
    font-size: 1.2rem; 
  }
`;

const Info = styled.p`
  margin: 5px 0;
  color: #555;
  text-align:center;
`;

const ExpandButton = styled.button`
  background-color: transparent;
  border: none;
  color: blue;
  cursor: pointer;
  text-align: left;
  margin: 10px 40px;
  padding: 5px;
  font-size: 1rem;

  @media (max-width: 768px) {
    margin: 10px; 
    font-size: 0.9rem; 
  }

  &:hover {
    background-color: #fff;
  }
`;

const CourseDetails = styled.div`
  margin-top: 10px;
  margin-left:40px;

  @media (max-width: 768px) {
    margin-left: 0; 
    padding:20px;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const Skill = styled.span`
  background-color: #e7f3ff;
  color: #007bff;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 0.9rem;
`;

// Course Component
const Course = ({ course, isOpen, toggleOpen }) => {
  return (
    <CourseContainer onClick={toggleOpen}>
      <CourseTitle>{course.title}</CourseTitle>
      <Info>Duration: {course.duration} hours</Info>
      <Info>Rating: {course.rating} ⭐ ({course.reviews} ratings)</Info>

      <ExpandButton>
        {isOpen ? "Hide details ▲" : "Show details ▼"}
      </ExpandButton>

      {isOpen && (
        <CourseDetails>
          <h4>What you'll learn</h4>
          <br />
          <ul>
            {course.learningPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <br />
          <h4>Skills you'll gain</h4>
          <SkillsContainer>
            {course.skills.map((skill, index) => (
              <Skill key={index}>{skill}</Skill>
            ))}
          </SkillsContainer>
        </CourseDetails>
      )}
    </CourseContainer>
  );
};

// CourseList Component with dropdown functionality
const CourseList = ({ courses }) => {
  const [openCourseIndex, setOpenCourseIndex] = useState(null);

  const toggleCourse = (index) => {
    setOpenCourseIndex(openCourseIndex === index ? null : index);
  };

  return (
    <CourseListContainer>
      {courses.map((course, index) => (
        <Course
          key={index}
          course={course}
          isOpen={openCourseIndex === index}
          toggleOpen={() => toggleCourse(index)}
        />
      ))}
    </CourseListContainer>
  );
};

// Specialization Section
const Specialization = () => {
  const courses = [
    {
      title: '1. Foundations of Quality Assurance and Testing',
      duration: 16,
      rating: 4.5,
      reviews: 280,
      learningPoints: [
        'Introduction to Quality Assurance, testing types (Manual vs. Automated).',
        'Understanding SDLC (Software Development Lifecycle) and STLC (Software Testing Lifecycle).',
        'Designing effective test cases and test scenarios.',
        'Writing test plans, test cases, and bug reports.',
        'Basics of defect tracking and management.'
      ],
      skills: ['Quality Assurance', 'SDLC', 'STLC', 'Test Case Design', 'Bug Reporting']
    },
    {
      title: '2. Manual Testing Techniques and Tools',
      duration: 20,
      rating: 4.6,
      reviews: 340,
      learningPoints: [
        'Executing test cases and reporting results.',
        'Applying black-box testing techniques (boundary value analysis, equivalence partitioning).',
        'Functional vs. Non-functional testing.',
        'Using defect management tools like Jira or Bugzilla.',
        'Exploratory and regression testing techniques.'
      ],
      skills: ['Manual Testing', 'Functional Testing', 'Regression Testing', 'Bug Tracking']
    },
    {
      title: '3. Automation Testing Fundamentals',
      duration: 25,
      rating: 4.8,
      reviews: 400,
      learningPoints: [
        'Introduction to test automation and its benefits.',
        'Setting up automation environments (Selenium, WebDriver).',
        'Writing basic automation scripts in JavaScript/Python/Java.',
        'Developing automation test suites for web applications.',
        'Best practices in automation, including maintaining test scripts.'
      ],
      skills: ['Selenium', 'Automation Scripting', 'WebDriver', 'JavaScript/Python/Java']
    },
    {
      title: '4. Advanced Automation Frameworks and Tools',
      duration: 18,
      rating: 4.7,
      reviews: 360,
      learningPoints: [
        'Creating reusable and maintainable test frameworks (Page Object Model, Data-Driven Testing).',
        'API testing using tools like Postman and REST Assured.',
        'Introduction to Continuous Integration tools (Jenkins, GitHub Actions).',
        'Running tests in CI/CD pipelines for faster feedback.',
        'Cross-browser and cross-platform testing techniques.'
      ],
      skills: ['Page Object Model', 'Data-Driven Testing', 'API Testing', 'Jenkins', 'CI/CD']
    },
    {
      title: '5. Performance and Security Testing Essentials',
      duration: 15,
      rating: 4.6,
      reviews: 290,
      learningPoints: [
        'Basics of performance testing: Load, stress, and scalability testing.',
        'Using tools like JMeter for performance testing.',
        'Introduction to security testing principles.',
        'Identifying common vulnerabilities (SQL Injection, XSS).',
        'Implementing test cases for security in QA processes.'
      ],
      skills: ['Performance Testing', 'JMeter', 'Security Testing', 'Vulnerability Identification']
    }
    
      
  ];

  // return (
  //   <SpecializationContainer>
  //       <br /><br />
  //     <h2 className='font-bold'> QA Engineering Learning Modules</h2>
  //     <br />
  //     <p>Master the essentials of QA Engineering with our comprehensive learning modules, designed to provide you with industry-ready skills in manual and automated testing, performance analysis, and security assurance. Learn essential tools and practices like Selenium, Jira, JMeter, and Postman, preparing you to ensure software quality at every stage of development.</p>
  //     <CourseList courses={courses} />
  //   </SpecializationContainer>
  // );
};

// Main App Component
const App = () => {
  return (
    <>
      <Mern />
      <Specialization />
    </>
  );
};

export default App;
