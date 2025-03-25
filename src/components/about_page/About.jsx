
import styled, { keyframes } from 'styled-components';
import { FaCheckCircle, FaPhoneAlt, FaQuoteLeft } from 'react-icons/fa';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const AboutUsContainer = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f7f9fc;
  color: #333;
`;

const HeaderSection = styled.div`
  background: url('https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D') no-repeat center/cover;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  position: relative;
  animation: ${fadeIn} 2s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  h1 {
    z-index: 2;
    font-size: 3.5em;
    margin-bottom: 15px;
  }

  p {
    z-index: 2;
    font-size: 1.5em;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5em;
  text-align: center;
  margin: 60px 0 30px;
  color: #2a5d84;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0;
  animation: ${fadeIn} 1.5s ease-in-out forwards;
`;

const AboutSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 100px;
  gap: 40px;
  background: linear-gradient(135deg, #e0f7fa, #ffffff);
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1.5s ease-in-out forwards;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px;
  }
`;

const ButtonStyled = styled.a`
  display: inline-block;
  background: #fff;
  color: white;
  padding: 12px 25px;
  font-size: 1.2em;
  border-radius: 5px 30px 5px;
  text-align: center;
  text-decoration: none;
  margin: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #004080;
    transform: translateY(-3px);
  }
`;



const AboutContent = styled.div`
  max-width: 600px;

  h2 {
    font-size: 2.5em;
    color: #006f8e;
    font-weight: bold;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 1.5em;
    color: #006f8e;
    font-weight: bold;
    margin-top: 20px;
  }

  p {
    font-size: 1.2em;
    color: #555;
    line-height: 1.7;
    margin-bottom: 25px;
    
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 1.1em;
      margin: 12px 0;
      display: flex;
      align-items: center;
      color: #333;

      svg {
        margin-right: 10px;
        color: #007bff;
        font-size: 1.4em;
        transition: transform 0.3s ease;
      }

      &:hover svg {
        transform: scale(1.1);
      }
    }
  }

  a {
    color: #007bff;
    font-size: 1.2em;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    border: 2px solid #007bff;
    border-radius: 5px 25px 5px;
    padding: 10px 15px;
    font-weight: bold;
    transition: all 0.3s ease;
    margin-top: 25px;

    svg {
      margin-right: 10px;
    }

    &:hover {
      background-color: #007bff;
      color: white;
      transform: translateY(-3px);
    }
  }
`;

const AboutImage = styled.div`
  width: 50%;
  height: 400px;
  margin-top: 100px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CoursesSection = styled.div`
  padding: 50px 20px;
  background-color: #f1f1f1;

  .courses {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

    .course {
      background-color: #2c3e50;
      color: white;
      padding: 25px;
    //   border-radius: 12px;
      border-radius: 5px 25px 5px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      font-size: 1.3em;
      text-align: center;
      width: 220px;
      transition: transform 0.3s, box-shadow 0.3s;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      }
    }
  }
`;

const TeamSection = styled.div`
  padding: 50px 20px;
  background-color: #e3f2fd;

  .team-members {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }

  .team-member {
    text-align: center;

    img {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 15px;
    }

    h3 {
      font-size: 1.4em;
      margin: 10px 0;
    }

    p {
      color: #555;
      font-size: 1.1em;
    }
  }
`;

const TestimonialsSection = styled.div`
  background-color: #34495e;
  color: white;
  padding: 50px 20px;
  text-align: center;

  .testimonials {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }

  .testimonial {
    background-color: #ecf0f1;
    color: #2c3e50;
    padding: 20px;
    border-radius: 12px;
    max-width: 300px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    position: relative;

    p {
      font-style: italic;
    }

    svg {
      position: absolute;
      top: -10px;
      left: 10px;
      color: #007bff;
      font-size: 1.5em;
    }
  }
`;



const ContactDetailsContainer = styled.div`
  padding: 20px;
  color: #333;
  text-align: center;
  margin-top: 30px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  display: inline-flex;
  align-items: center;
  margin: 0 10px;
  transition: color 0.3s;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }

  img {
    width: 34px;
    height: 34px;
    margin-right: 8px;
  }`;


const About = () => {
  const teamMembers = [
    {
      img: 'https://a2pyramid.com/aditya.PNG',
      name: 'Aditya Apurv',
      role: 'CEO & Founder',
    },
    {
      img: 'https://a2pyramid.com/demo_2.PNG',
      name: 'Shubham Kumar',
      role: 'CTO & Co-Founder',
    },
    {
      img: 'https://a2pyramid.com/kartik.PNG',
      name: 'Kartik Kishor',
      role: 'COO & Manager',
    },
    {
      img: 'https://a2pyramid.com/yashraj.jpg',
      name: 'Yash Raj',
      role: 'Product Manager',
    },
    {
      img: 'https://media.licdn.com/dms/image/v2/D4D03AQFb-NvnPw2beg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720954604568?e=1743033600&v=beta&t=nZGqs3bbemmMUsL5tr7QblJUWlzynpmm4Hdh8oLQ-4c',
      name: 'Anushka Aryan',
      role: 'Lead Developer',
    },
  ];

  return (
    <AboutUsContainer>
      <HeaderSection>
        <h1 style={{fontWeight:"bold"}}>About Us</h1>
        {/* <p>A2 Pyramid Edutech Pvt Ltd.</p> */}
      </HeaderSection>

      <AboutSection>
        <AboutContent>
          <h2>Your Trusted EdTech Partner with 3 Years of Expertise</h2>
          <p>
            With years of experience, our EdTech platform is dedicated to fostering meaningful educational journeys and lifelong learning. We strive to make education accessible, engaging, and impactful through innovative approaches.
          </p>
          <ul>
            <li>
              <FaCheckCircle /> One to One Mentorship
            </li>
            <li>
              <FaCheckCircle /> Professional Staff
            </li>
            <li>
              <FaCheckCircle /> 24/7 Support
            </li>
            <li>
              <FaCheckCircle /> Fair Prices
            </li>
          </ul>
          <h3>Call us to ask any questions:</h3>
          <a href="tel:+919472994483">
            <FaPhoneAlt /> +91 9472994483
          </a>
          <h3>Fill this Google Form to Join</h3>
    <div className="form-buttons">
      <ButtonStyled href="https://forms.gle/yourgoogleformlink" target="_blank">Google Form</ButtonStyled>
      <ButtonStyled>Register Now</ButtonStyled>
    </div>
        </AboutContent>
        <AboutImage>
          <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2glMjB0ZWFtJTIwZGlzY3Vzc2lvbnxlbnwwfHwwfHx8MA%3D%3D" alt="Team Discussion" />
        </AboutImage>
      </AboutSection>

      <SectionTitle>Courses We Offer</SectionTitle>
      <CoursesSection>
        <div className="courses">
          {['Data Science', 'MERN Stack', 'AI/ML', 'Data Analytics', 'Quality Assurance', 'DevOps', 'Web Development'].map(
            (course, index) => (
              <div className="course" key={index}>
                {course}
              </div>
            )
          )}
        </div>
      </CoursesSection>

      <SectionTitle>Professional Staff Ready to Help You Grow</SectionTitle>
      <TeamSection>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </TeamSection>

      <SectionTitle>What People Say</SectionTitle>
<TestimonialsSection>
  <div className="testimonials">
    <div className="testimonial">
      <FaQuoteLeft />
      <p>A2 Pyramid mentorship program has been a game-changer for my career. The guidance I received was practical and tailored to my needs, helping me secure a job in just 3 months!</p>
      <h3>- Ankit</h3>
    </div>
    <div className="testimonial">
      <FaQuoteLeft />
      <p>The course material at A2 Pyramid is up-to-date and comprehensive. I was able to gain hands-on experience that boosted my confidence and skills. Highly recommend!</p>
      <h3>- Namrata</h3>
    </div>
    <div className="testimonial">
      <FaQuoteLeft />
      <p>As a working professional, the flexible learning options at A2 Pyramid were perfect for me. I was able to balance work and study while gaining valuable insights into my field.</p>
      <h3>Aneesha</h3>
    </div>
  </div>
</TestimonialsSection>
  <ContactDetailsContainer>
<div>
  <h4 style={{ fontSize: "2rem", color: "#002D62", fontWeight: "bold", width: "83%", margin: "auto", padding: "10px", borderRadius: "5px" }}>Social Media</h4>
  
<Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT769bgfTT-i73ZB4S0VR6Z_A4YEZyAOa92YQ&s" alt="YouTube icon" />
  YouTube
</Link>

<Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuJhDxqnknL532tb3usCPP13d8PIiuKcUCmQ&s" alt="Twitter icon" />
  Twitter
</Link>

<Link href="https://www.instagram.com/a2pyramid/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="Instagram icon" />
  Instagram
</Link>
  
</div>
</ContactDetailsContainer> 

    </AboutUsContainer>
  );
};

export default About;
