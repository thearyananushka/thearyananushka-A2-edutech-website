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


const Highlight = styled.span`
  color: black;
  font-weight: 600;
`;
const BoldText = styled.p`
  font-weight: bold;
  font-size: 1rem;
  color:green; 
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
  ${'' /* margin-top: 20px; */}

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
              <MainTitle>MACHINE LEARNING</MainTitle>
            </Header>
            
            <p>6 Months  • Online  • 100% Live Sessions</p>
            <br/>
            <BoldText>Course Fee: 24,999/-</BoldText>
            <BrochureButton><a href='#'>

             Pay Now
            </a>
            </BrochureButton>
            
          </InfoText>
          <BannerImage
            src="https://thumbs.dreamstime.com/b/machine-deep-learning-algorithms-artificial-intelligence-ai-automation-modern-technology-business-as-concept-134359416.jpg" />
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
  ${'' /* display: flex; */}
  ${'' /* flex-wrap: wrap; */}
  ${'' /* padding:20px; */}
  ${'' /* margin: 10px; */}
  text-align:center;
`;

const Skill = styled.span`
  text-align:center;
  background-color: #e7f3ff;
  ${'' /* color: #007bff; */}
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 1.9rem;
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
          <h3 style={{color:"green",fontWeight:"bold",textAlign:"center",fontSize:"2.3rem",textDecoration:"underline"}}>Module details</h3>
          <br />
          <ul>
            {course.learningPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <br />
          <h4 style={{color:"green",fontWeight:"bold",textAlign:"center",fontSize:"2.3rem",textDecoration:"underline"}}>Skills you'll gain</h4>
          <SkillsContainer>
            {course.skills.map((skill, index) => (
              <Skill key={index}>{skill},</Skill>
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
      title: 'Module 1 - Introduction to Machine Learning',
      duration: 1,
      rating: 4.7,
      reviews: 23,
      learningPoints: [
        "Python -basics to advanced, data structures required in making machine learning models and required tools for that"
      ],
      skills: ['Python', "DSA", "Introduction to ML/AI"]

    },
    {
      title: '2. Data Preprocessing and Exploration',
      duration: 2,
      rating: 4.7,
      reviews: 19,
      learningPoints: [
        'Learn techniques for data cleaning, transformation, and normalization.',
        'Discover exploratory data analysis (EDA) methods to visualize and understand data distributions and relationships.'
      ],
      skills: [ 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', "Seaborn", 'SQL', 'Data Visualization']

    },
    {
      title: '3. Supervised Learning Algorithms',
      duration: 3,
      rating: 4.8,
      reviews: 19,
      learningPoints: [
        'Dive into regression and classification algorithms, including linear regression, logistic regression, decision trees, and support vector machines.',
        'Implement and evaluate models using various performance metrics such as accuracy, precision, recall, and F1-score.'
      ],
      skills: ['Scikit-learn', 'TensorFlow', 'Keras', 'PyTorch']

    },
    {
      title: '4. Unsupervised Learning and Clustering',
      duration: 1,
      rating: 4.4,
      reviews: 23,
      learningPoints: [
        'Explore unsupervised learning techniques, focusing on clustering methods such as K-means, hierarchical clustering, and DBSCAN.',
        'Understand dimensionality reduction techniques like PCA (Principal Component Analysis) to simplify datasets.'
      ],
      skills: ["supervised learning","unsupervised learning","Deep learning"]

    },
    {
      title: '5. Deep Learning and Neural Networks',
      duration: 1,
      rating: 4.4,
      reviews: 13,
      learningPoints: [
        'Introduction to deep learning concepts, architectures, and frameworks like TensorFlow and PyTorch.',
        'Build and train neural networks for image recognition, natural language processing, and other complex tasks.'
      ],
      skills: ["Neural networks", 'TensorFlow', 'Keras', 'PyTorch', 'SQL', 'Data Visualization']

    },
  ];

  // return (
  //   <SpecializationContainer>
  //       <br /><br />
  //     <h2 className='font-bold'>Comprehensive Machine Learning Modules</h2>
  //     <br />
  //     <p>Master Machine Learning with this comprehensive course, covering foundational concepts, data preprocessing, supervised and unsupervised learning, deep learning techniques, and practical applications to build intelligent systems and derive insights from data.</p>
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
