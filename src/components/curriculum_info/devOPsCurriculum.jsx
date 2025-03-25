

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

const ArrowLine = styled.div`
  position: absolute;
  width: 2px;
  height: 40px;
  background-color: #1565c0;
  top: 100%;
  ${(props) => (props.align === "left" ? "left: 20%;" : "right: 20%;")}
  z-index: -1;

  &:after {
    content: "";
    position: absolute;
    top: 40px;
    ${(props) => (props.align === "left" ? "left: -10px;" : "right: -10px;")}
    border: 10px solid transparent;
    border-top: 10px solid #1565c0;
  }

  @media (max-width: 768px) {
    display: none;
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

const DevOpsSyllabus = () => {
  const sections = [
    {
      title: "Module 1. Introduction to DevOps",
      points: [
        "Overview of DevOps",
        "Benefits of DevOps",
        "DevOps Lifecycle",
        "DevOps Culture and Collaboration",
      ],
      align: "left",
    },
    {
      title: "Module 2. Version Control with Git",
      points: [
        "Git Basics and Commands",
        "Git Workflow and Branching",
        "Merging and Conflict Resolution",
        "Collaborating with GitHub",
      ],
      align: "right",
    },
    {
      title: "Module 3. Continuous Integration and Continuous Deployment (CI/CD)",
      points: [
        "Introduction to CI/CD",
        "Setting up Jenkins",
        "Automating Builds and Tests",
        "Continuous Deployment Pipeline",
      ],
      align: "left",
    },
    {
      title: "Module 4. Containerization and Docker",
      points: [
        "Introduction to Containers",
        "Docker Basics",
        "Dockerizing Applications",
        "Docker Compose",
      ],
      align: "right",
    },
    {
      title: "Module 5. Orchestration with Kubernetes",
      points: [
        "Overview of Kubernetes",
        "Deploying Applications with Kubernetes",
        "Scaling and Managing Containers",
        "Kubernetes Networking and Services",
      ],
      align: "left",
    },
    {
      title: "Module 6. Monitoring and Logging",
      points: [
        "Setting up Monitoring Tools (Prometheus, Grafana)",
        "Centralized Logging (ELK Stack)",
        "Alerting and Notifications",
        "Best Practices for Monitoring",
      ],
      align: "right",
    },
    {
      title: "Module 7. Infrastructure as Code (IaC)",
      points: [
        "Introduction to IaC",
        "Using Terraform for IaC",
        "Provisioning Cloud Resources",
        "Managing Infrastructure with Code",
      ],
      align: "left",
    },
  ];

  return (
    <Container>
      <Title>DevOps Course Syllabus</Title>

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

export default DevOpsSyllabus;
 