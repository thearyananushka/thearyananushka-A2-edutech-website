import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  background-color: #e3f2fd;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #1565c0;
  margin-bottom: 30px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 40px;
`;

const SubSection = styled.div`
  position: relative;
  margin: 20px 0;
  padding: 20px;
  width: 90%;
  max-width: 600px;
  border: 2px solid #1565c0;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  align-self: ${(props) => (props.align === "left" ? "flex-start" : "flex-end")};

  @media (max-width: 768px) {
    align-self: center;
    width: 100%;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  color: #fff;
  background: linear-gradient(90deg, #1e88e5, #1565c0);
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`;

const ListItem = styled.li`
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
  margin-bottom: 8px;
  position: relative;
  padding-left: 20px;

  &:before {
    content: "\u2022";
    color: #1565c0;
    font-weight: bold;
    position: absolute;
    left: 0;
    top: 0;
  }
`;


const EnrollButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px 25px 25px;
  font-size: 1.2rem;
  width: 150px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }
`;


const AIMLSyllabus = () => {
  const sections = [
    {
      title: "Module 1. Introduction to AI/ML",
      points: [
        "Overview of Artificial Intelligence",
        "History and Evolution of Machine Learning",
        "Applications of AI and ML",
        "Key Concepts in AI/ML",
      ],
      align: "left",
    },
    {
      title: "Module 2. Python for AI/ML",
      points: [
        "Python Basics and Libraries",
        "Introduction to NumPy and Pandas",
        "Data Preprocessing with Scikit-Learn",
        "Working with Matplotlib and Seaborn",
      ],
      align: "right",
    },
    {
      title: "Module 3. Supervised Learning",
      points: [
        "Regression Analysis (Linear and Logistic)",
        "Classification Techniques",
        "Decision Trees and Random Forests",
        "Model Evaluation Metrics",
      ],
      align: "left",
    },
    {
      title: "Module 4. Unsupervised Learning",
      points: [
        "Clustering Algorithms (K-Means, DBSCAN)",
        "Dimensionality Reduction (PCA, t-SNE)",
        "Anomaly Detection",
        "Applications of Unsupervised Learning",
      ],
      align: "right",
    },
    {
      title: "Module 5. Neural Networks and Deep Learning",
      points: [
        "Introduction to Neural Networks",
        "Convolutional Neural Networks (CNNs)",
        "Recurrent Neural Networks (RNNs)",
        "Transfer Learning",
      ],
      align: "left",
    },
    {
      title: "Module 6. Advanced Topics in AI/ML",
      points: [
        "Reinforcement Learning Basics",
        "Generative Adversarial Networks (GANs)",
        "Time Series Forecasting",
        "Ethics and Bias in AI",
      ],
      align: "right",
    },
  ];

  return (
    <Container>
      <Title>AI/ML Course Syllabus</Title>

      <Section>
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            <SubSection align={section.align}>
              <SubTitle>{section.title}</SubTitle>
              <List>
                {section.points.map((point, idx) => (
                  <ListItem key={idx}>{point}</ListItem>
                ))}
              </List>
              {section.align === "left" && (
                <div style={{ textAlign: "right", marginTop: "10px" }}>
                  <EnrollButton>Enroll Now</EnrollButton>
                </div>
              )}
              {section.align === "right" && (
                <EnrollButton style={{ marginTop: "10px" }}>Enroll Now</EnrollButton>
              )}
            </SubSection>
            {/* <SubSection align={section.align}>
              <SubTitle>{section.title}</SubTitle>
              <List>
                {section.points.map((point, idx) => (
                  <ListItem key={idx}>{point}</ListItem>
                ))}
              </List>
            </SubSection>
            {index < sections.length - 1 && <ArrowLine align={section.align} />} */}
          </React.Fragment>
        ))}
      </Section>
    </Container>
  );
};

export default AIMLSyllabus;
