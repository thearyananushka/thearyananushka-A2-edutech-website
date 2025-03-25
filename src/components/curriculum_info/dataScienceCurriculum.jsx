

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  background-color: #e3f2fd;
  text-align: center;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #1565c0;
  margin-bottom: 40px;
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
  margin-bottom: 60px;
`;

const SubSection = styled.div`
  position: relative;
  margin: 20px 0;
  padding: 20px;
  width: 60%;
  border: 2px solid #1565c0;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  align-self: ${(props) => (props.align === "left" ? "flex-start" : "flex-end")};

  @media (max-width: 768px) {
    width: 90%;
    align-self: center;
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

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`;

const ListItem = styled.li`
  font-size: 1rem;
  color: #444;
  line-height: 1.8;
  margin-bottom: 10px;
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

  @media (max-width: 768px) {
    font-size: 0.9rem;
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

const DataScienceSyllabus = () => {
  const sections = [
    {
      title: "Module 1. Introduction to Data Science",
      points: [
        "What is Data Science?",
        "Applications of Data Science",
        "Setting up Python Environment",
        "Introduction to Jupyter Notebooks",
      ],
      align: "left",
    },
    {
      title: "Module 2. Data Analysis and Visualization",
      points: [
        "Exploratory Data Analysis (EDA)",
        "Data Cleaning and Preprocessing",
        "Visualization Tools: Matplotlib, Seaborn",
        "Hands-on Project: Data Visualization",
      ],
      align: "right",
    },
    {
      title: "Module 3. Statistics and Probability",
      points: [
        "Descriptive and Inferential Statistics",
        "Probability Distributions",
        "Hypothesis Testing",
        "Correlation and Regression",
      ],
      align: "left",
    },
    {
      title: "Module 4. Machine Learning Basics",
      points: [
        "Supervised vs Unsupervised Learning",
        "Linear Regression and Logistic Regression",
        "Decision Trees and Random Forests",
        "Model Evaluation Metrics",
      ],
      align: "right",
    },
    {
      title: "Module 5. Advanced Machine Learning",
      points: [
        "Clustering Algorithms",
        "Dimensionality Reduction (PCA)",
        "Time Series Analysis",
        "Introduction to Deep Learning",
      ],
      align: "left",
    },
    {
      title: "Module 6. Deployment and Real-World Applications",
      points: [
        "Model Deployment with Flask",
        "Introduction to Cloud Platforms",
        "Monitoring and Maintaining Models",
        "Case Studies in Data Science",
      ],
      align: "right",
    },
  ];

  return (
    <Container>
      <Title>Data Science Course Syllabus</Title>
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
          </React.Fragment>
        ))}
      </Section>
    </Container>
  );
};

export default DataScienceSyllabus;
 