
// import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import styled, { keyframes } from 'styled-components';

const PageContent = styled.div`
  background-color: #f8f9fa;
  font-family: "Roboto", sans-serif;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// const BreadcrumbRow = styled.div`
//   background-color: #007bff;
//   padding: 10px 0;
// `;

// const BreadcrumbList = styled.ul`
//   list-style: none;
//   display: flex;
//   justify-content: center;
//   gap: 15px;
//   height:50px;
//   padding: 0;
//   margin: 0;
//   color: white;

//   li {
//     &:not(:last-child)::after {
//       content: "/";
//       margin-left: 10px;
      

//     }
//   }
// `;

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


const ContactSection = styled.div`
  padding: 40px 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const ContactInfoBox = styled.div`
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: white;
  font-size: 1rem;
  padding: 30px;
  border-radius: 15px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0));
    transform: rotate(45deg);
    z-index: 0;
  }

  h2 {
    z-index: 1;
    position: relative;
    margin-bottom: 20px;
    font-size: 2rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    span {
      color: #ffdd57;
    }
  }
  h3 {
    // z-index: 1;
    // position: relative;
    margin-bottom: 10px;
    font-size: 1.6rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }

  }

  ul {
    list-style: none;
    padding: 0;
    margin: 20px 0;
    z-index: 1;
    position: relative;

    li {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;
      font-size: 1.3rem;
      @media (max-width: 768px) {
        font-size: 1rem;
      }

      svg {
        color: #ffdd57;
        font-size: 1rem;
      }
    }
  }

  h3 {
    z-index: 1;
    position: relative;
    margin-top: 20px;
    text-align: center;
  }
`;

const SocialList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 0;
  margin: 30px 0;

  li a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    background: linear-gradient(135deg, #007bff, #0056b3);
    color: white;
    border-radius: 50%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
    transition: transform 0.3s ease, background 0.4s, box-shadow 0.3s;

    &:hover {
      background: linear-gradient(135deg, #25a6f6, #25a6f6);
      color: #004080;
      transform: scale(1.2);
    }

    svg {
      font-size: 1.5rem;
    }
  }
`;

const ContactForm = styled.form`
  background: #ffffff;
  padding: 20px;
  border-radius: 15px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 20px;
    font-size: 1.8rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    span {
      color: #007bff;
    }
  }

  .form-group {
    margin-bottom: 15px;

    label {
      font-weight: bold;
      margin-bottom: 5px;
      display: inline-block;
    }

    input,
    textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-size: 1rem;
    }
  }

  button {
    background-color: #007bff;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 5px 25px 5px;
    font-size: 1rem;
    width: 150px;
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;

    &:hover {
      background-color: #0056b3;
      transform: translateY(-2px);
    }
  }
`;

const MapSection = styled.div`
  margin-top: 40px;

  iframe {
    width: 100%;
    height: 300px;
    border: none;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
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

const Contact = () => {
  return (
    <PageContent>
     <HeaderSection>
        <h1 style={{fontWeight:"bold"}}>Contact Us</h1>
        {/* <p>A2 Pyramid Edutech Pvt Ltd.</p> */}
      </HeaderSection>
      {/* <BreadcrumbRow>
        <BreadcrumbList>
          <li style={{fontSize:"2rem",fontWeight:"bold"}}>Contact Us</li>
        </BreadcrumbList>
        
      </BreadcrumbRow> */}
      <ContactSection>
        <ContactInfoBox>
          <h2>
            Contact <span><u>Information</u></span>
          </h2>
          <p>Have questions or need assistance? We are here to help—reach out anytime!</p>
          <br />
          <hr />
          <br />
          <ul>
          {/* <h3> A2 Pyamid Edutech </h3><br /> */}
            <li><FaMapMarkerAlt /> <span style={{fontWeight:"bold",fontSize:"1.2rem",fontFamily:"roboto",letterSpacing:"2px"}}>Rukunpura, Tilak Nagar,Bailey Road Patna, Pin:800014</span></li><br />
            <li><FaPhoneAlt /> <span style={{fontWeight:"bold",fontSize:"1.2rem",fontFamily:"roboto",letterSpacing:"2px"}}>+91 9472994483 </span></li><br />
            <li><FaEnvelope />  <span style={{fontWeight:"bold",fontSize:"1rem",fontFamily:"roboto",letterSpacing:"3px"}}>studypyramid@gmail.com</span></li><br />
          </ul>
          <h2>Follow Us</h2>
          <SocialList>
            <li><a href="#"><FaFacebook /></a></li>
            <li><a href="#"><FaTwitter /></a></li>
            <li><a href="#"><FaLinkedin /></a></li>
            <li><a href="#"><FaInstagram /></a></li>
          </SocialList>
        </ContactInfoBox>
        <ContactForm>
          <h2>
            Get In <span>Touch</span>
          </h2>
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Your Email Address</label>
            <input type="email" required />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="4" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </ContactForm>
      </ContactSection>
      <MapSection>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3597.781657220188!2d85.06637777539542!3d25.612170677446155!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57002ac8acc5%3A0x29d88f25df3c2a80!2sA2%20Pyramid%20Edutech!5e0!3m2!1sen!2sin!4v1730015108345!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </MapSection>


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


    </PageContent>
    
  );
};


export default Contact;





