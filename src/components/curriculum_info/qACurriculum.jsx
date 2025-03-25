

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

const QASyllabus = () => {
  const sections = [
    {
      title: "Module 1. Introduction to QA",
      points: [
        "Overview of Software Quality Assurance",
        "Importance of QA in Software Development",
        "QA Life Cycle",
        "Types of Testing (Manual, Automated)",
      ],
      align: "left",
    },
    {
      title: "Module 2. Software Development Life Cycle (SDLC)",
      points: [
        "Phases of SDLC",
        "Agile Methodology and QA",
        "Waterfall Model",
        "DevOps and Continuous Testing",
      ],
      align: "right",
    },
    {
      title: "Module 3. Manual Testing",
      points: [
        "Test Case Design",
        "Test Execution and Reporting",
        "Defect Tracking and Management",
        "Manual Regression Testing",
      ],
      align: "left",
    },
    {
      title: "Module 4. Automation Testing",
      points: [
        "Introduction to Automation Testing",
        "Choosing Automation Tools",
        "Selenium WebDriver Basics",
        "Writing and Running Automated Test Scripts",
      ],
      align: "right",
    },
    {
      title: "Module 5. Performance Testing",
      points: [
        "Performance Testing Overview",
        "Types of Performance Testing (Load, Stress, Spike)",
        "Tools for Performance Testing (JMeter, LoadRunner)",
        "Analyzing Performance Test Results",
      ],
      align: "left",
    },
    {
      title: "Module 6. Security Testing",
      points: [
        "Introduction to Security Testing",
        "Common Security Vulnerabilities",
        "Penetration Testing",
        "Tools for Security Testing (OWASP ZAP, Burp Suite)",
      ],
      align: "right",
    },
    {
      title: "Module 7. Continuous Integration and Testing",
      points: [
        "CI/CD Pipeline and QA Integration",
        "Jenkins for Automation",
        "Running Automated Tests in CI/CD Pipeline",
        "Continuous Testing Best Practices",
      ],
      align: "left",
    },
  ];

  return (
    <Container>
      <Title>QA Course Syllabus</Title>

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

export default QASyllabus;
 