import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Styled Components
const SettingsContainer = styled.div`
  background-color: #3b82f6; /* Blue background for full height */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Section = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  margin: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const SectionTitle = styled.h3`
  margin: 0 0 10px;
  color: #34495e;
  font-size: 1.8rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const FormField = styled.div`
  margin: 15px 0;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #16a085;
  }
`;

const MenuButton = styled(FaBars)`
  color: #3b82f6; /* Set FaBars color to blue */
`;

// Settings Component
const Settings = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <SettingsContainer>
      <ContentWrapper>
        <button onClick={toggleMenu} className="lg:hidden p-2">
          <MenuButton size={30} /> {/* Use the styled MenuButton with blue color */}
        </button>

        {menuOpen && (
          <div className="fixed inset-0 bg-blue-900 bg-opacity-95 z-50 flex flex-col items-center justify-center text-white">
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-3xl">
              <FaTimes />
            </button>
            <nav className="flex flex-col gap-6 text-center text-lg">
              <Link to="/dashboard" className="hover:underline">Home</Link>
              <Link to="/trainer" className="hover:underline">Trainer Section</Link>
              <Link to="/student" className="hover:underline">Student Section</Link>
              <Link to="/course" className="hover:underline">Course Section</Link>
              <Link to="/exam" className="hover:underline">Exam</Link>
              <Link to="/payment" className="hover:underline">Payment</Link>
              <Link to="/help" className="hover:underline">Help Centre</Link>
              <Link to="/settings" className="hover:underline">Settings</Link>
              <Link to="/report" className="hover:underline">Report</Link>
            </nav>
          </div>
        )}

        {/* General Settings */}
        <Section>
          <SectionTitle>General Settings</SectionTitle>
          <FormField>
            <label htmlFor="contactInfo">Contact Information:</label>
            <textarea id="contactInfo" rows="3" placeholder="Enter your contact information..." />
          </FormField>
          <FormField>
            <label htmlFor="supportLinks">Support Links:</label>
            <textarea id="supportLinks" rows="3" placeholder="Enter your support links..." />
          </FormField>
          <Button>Save Changes</Button>
        </Section>

        {/* Account Settings */}
        <Section>
          <SectionTitle>Account Settings</SectionTitle>
          <FormField>
            <label htmlFor="adminName">Admin Name:</label>
            <input type="text" id="adminName" placeholder="Enter your name" />
          </FormField>
          <FormField>
            <label htmlFor="password">New Password:</label>
            <input type="password" id="password" placeholder="Enter a new password" />
          </FormField>
          <Button>Update Profile</Button>
        </Section>

        {/* Permissions Management */}
        <Section>
          <SectionTitle>Permissions Management</SectionTitle>
          <FormField>
            <label htmlFor="adminPermissions">Define Access Levels:</label>
            <textarea id="adminPermissions" rows="3" placeholder="Define permissions for other admins..." />
          </FormField>
          <Button>Save Permissions</Button>
        </Section>
      </ContentWrapper>
    </SettingsContainer>
  );
};

export default Settings;
