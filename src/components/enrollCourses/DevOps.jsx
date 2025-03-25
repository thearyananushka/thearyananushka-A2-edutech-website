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
  align-items:center;
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
              <MainTitle>DevOps</MainTitle>
            </Header>
            <br/>
            <p>6 Months  • Online  • 100% Live Sessions</p>
            <br/>
            <BoldText>Course Fee: 14,999/-</BoldText>
            <BrochureButton>Pay Now</BrochureButton>
          </InfoText>
          <BannerImage
            src="https://t3.ftcdn.net/jpg/05/12/04/52/360_F_512045284_gsbCu75oyqHo59MccBltJe0sJRck1PPa.jpg" />
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
        title: '1. Introduction to DevOps and Agile Methodologies',
        duration: 12,
        rating: 4.7,
        reviews: 300,
        learningPoints: [
          'Understanding the principles of DevOps and the Agile approach.',
          'Key differences between DevOps, Agile, and traditional methodologies.',
          'Overview of the software development lifecycle (SDLC) and delivery pipelines.',
          'Benefits of DevOps in modern software development.'
        ],
        skills: ['Agile', 'Scrum', 'DevOps Mindset', 'SDLC Basics']
      },
      {
        title: '2. Version Control and Continuous Integration with Git and Jenkins',
        duration: 18,
        rating: 4.8,
        reviews: 420,
        learningPoints: [
          'Setting up Git for source code management and collaboration.',
          'Mastering Git commands for branching, merging, and version tracking.',
          'Configuring Jenkins for automated build processes and continuous integration (CI).',
          'Building pipelines and managing CI jobs to streamline code integration.'
        ],
        skills: ['Git', 'Jenkins', 'CI/CD', 'Pipeline Automation']
      },
      {
        title: '3. Containerization and Orchestration with Docker and Kubernetes',
        duration: 20,
        rating: 4.6,
        reviews: 390,
        learningPoints: [
          'Basics of containerization and creating Docker images.',
          'Deploying containers and managing microservices with Docker.',
          'Introduction to Kubernetes architecture and managing clusters.',
          'Orchestrating services using Kubernetes for high availability and scalability.'
        ],
        skills: ['Docker', 'Kubernetes', 'Microservices', 'Container Management']
      },
      {
        title: '4. Infrastructure as Code (IaC) with Terraform and Ansible',
        duration: 16,
        rating: 4.5,
        reviews: 250,
        learningPoints: [
          'Introduction to Infrastructure as Code and configuration management.',
          'Automating infrastructure with Terraform and writing Terraform scripts.',
          'Managing configurations and deployments with Ansible.',
          'Applying IaC best practices for efficient, repeatable infrastructure management.'
        ],
        skills: ['Terraform', 'Ansible', 'IaC', 'Automation']
      },
      {
        title: '5. Cloud Deployment and Monitoring',
        duration: 15,
        rating: 4.7,
        reviews: 310,
        learningPoints: [
          'Overview of cloud platforms (AWS, Azure, Google Cloud) and their DevOps tools.',
          'Deploying applications in the cloud and setting up auto-scaling and load balancing.',
          'Configuring monitoring and logging tools to track performance and resolve issues.',
          'Setting up alerts and dashboards for proactive infrastructure management.'
        ],
        skills: ['Cloud Platforms', 'Cloud Deployment', 'Monitoring', 'Logging']
      }
      
  ];

  // return (
  //   <SpecializationContainer>
  //       <br /><br />
  //     <h2 className='font-bold'> DevOps Learning Modules</h2>
  //     <br />
  //     <p>Master the art of DevOps with our immersive course modules designed to equip you with industry-relevant skills in continuous integration, deployment, automation, and cloud infrastructure. Learn essential tools and practices like Docker, Kubernetes, Jenkins, and cloud services, preparing you to streamline and optimize development and deployment pipelines.</p>
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
