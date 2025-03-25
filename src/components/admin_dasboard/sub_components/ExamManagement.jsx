import { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Container = styled.div`
  padding: 0;
  background-color: #3b82f6; /* Blue background for the entire container */
  min-height: 100vh; /* Ensures it covers the full viewport height */
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: white; /* White background for content */
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #34495e;
  margin: 0;
  padding: 10px 0;
  text-align: center;
  background-color: #3b82f6;
  color: white;
  border-radius: 5px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #16a085;
  }
`;

const ExamTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    border: 1px solid #ccc;
    padding: 12px;
    text-align: left;
  }

  th {
    background-color: #34495e;
    color: white;
  }

  @media (max-width: 768px) {
    display: block;
    overflow-x: auto; /* Allow horizontal scrolling */
  }
`;

const ActionButton = styled(Button)`
  background-color: #3498db;
  
  &:hover {
    background-color: #2980b9;
  }
`;

const MenuButton = styled(FaBars)`
  color: #3b82f6; /* Set FaBars color to blue */
`;

const ExamManagement = () => {
  const [exams, setExams] = useState([]);
  const [examData, setExamData] = useState({
    name: '',
    date: '',
    topics: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExamData({ ...examData, [name]: value });
  };

  const addExam = (e) => {
    e.preventDefault();
    setExams([...exams, { ...examData, id: Date.now() }]);
    setExamData({
      name: '',
      date: '',
      topics: '',
    });
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const viewResults = (id) => {
    console.log('View Results for Exam ID:', id);
  };

  return (
    <Container>
      <ContentWrapper>
        <button onClick={toggleMenu} className="lg:hidden p-2">
          <MenuButton size={30} /> {/* Use the styled MenuButton with blue color */}
        </button>

        <Title>Exam Management</Title>

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

        <Form onSubmit={addExam}>
          <Input
            type="text"
            name="name"
            placeholder="Exam Name"
            value={examData.name}
            onChange={handleInputChange}
            required
          />
          <Input
            type="date"
            name="date"
            value={examData.date}
            onChange={handleInputChange}
            required
          />
          <TextArea
            name="topics"
            placeholder="Topics Covered"
            value={examData.topics}
            onChange={handleInputChange}
            rows="3"
            required
          />
          <Button type="submit">Add New Exam</Button>
        </Form>

        <ExamTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Topics Covered</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {exams.map(exam => (
              <tr key={exam.id}>
                <td>{exam.name}</td>
                <td>{new Date(exam.date).toLocaleDateString()}</td>
                <td>{exam.topics}</td>
                <td>
                  <ActionButton onClick={() => viewResults(exam.id)}>View Results</ActionButton>
                </td>
              </tr>
            ))}
          </tbody>
        </ExamTable>
      </ContentWrapper>
    </Container>
  );
};

export default ExamManagement;
