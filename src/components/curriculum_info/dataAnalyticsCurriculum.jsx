
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

const DataAnalyticsSyllabus = () => {
  const sections = [
    {
      title: "Module 1. Introduction to Data Analytics",
      points: [
        "Overview of Data Analytics",
        "Types of Data (Structured, Unstructured, Semi-structured)",
        "Key Concepts in Data Analysis",
        "Tools for Data Analytics",
      ],
      align: "left",
    },
    {
      title: "Module 2. Data Collection and Cleaning",
      points: [
        "Data Collection Methods",
        "Data Cleaning Techniques",
        "Handling Missing Data",
        "Removing Duplicates and Outliers",
      ],
      align: "right",
    },
    {
      title: "Module 3. Exploratory Data Analysis (EDA)",
      points: [
        "Data Summarization Techniques",
        "Data Visualization",
        "Correlation and Relationships",
        "Basic Statistical Analysis",
      ],
      align: "left",
    },
    {
      title: "Module 4. Statistical Analysis",
      points: [
        "Descriptive Statistics",
        "Inferential Statistics",
        "Hypothesis Testing",
        "Confidence Intervals and P-Values",
      ],
      align: "right",
    },
    {
      title: "Module 5. Data Modeling and Algorithms",
      points: [
        "Linear Regression",
        "Logistic Regression",
        "Clustering and Classification",
        "Decision Trees and Random Forest",
      ],
      align: "left",
    },
    {
      title: "Module 6. Data Visualization with Tools",
      points: [
        "Using Matplotlib and Seaborn (Python)",
        "Interactive Dashboards with Tableau",
        "Creating Reports and Presentations",
        "Best Practices in Data Visualization",
      ],
      align: "right",
    },
    {
      title: "Module 7. Advanced Topics in Data Analytics",
      points: [
        "Time Series Analysis",
        "Big Data Analytics with Hadoop and Spark",
        "Machine Learning in Data Analytics",
        "Real-Time Data Processing",
      ],
      align: "left",
    },
  ];

  return (
    <Container>
      <Title>Data Analytics Course Syllabus</Title>

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

export default DataAnalyticsSyllabus;
