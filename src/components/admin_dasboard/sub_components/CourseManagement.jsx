import { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Container = styled.div`
  padding: 0;
  background-color: #3b82f6; /* Blue background for the entire container */
  min-height: 100vh;
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
  margin-top: 20px;
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

const CourseTable = styled.table`
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
    overflow-x: auto;
  }
`;

const ActionButton = styled(Button)`
  background-color: #3498db;
  
  &:hover {
    background-color: #2980b9;
  }
`;

// Styled component for FaBars with blue color
const MenuButton = styled(FaBars)`
  color: #3b82f6; /* Set FaBars color to blue */
`;

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [courseData, setCourseData] = useState({
    name: '',
    description: '',
    syllabus: '',
    prerequisites: '',
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const addCourse = (e) => {
    e.preventDefault();
    setCourses([...courses, { ...courseData, id: Date.now() }]);
    setCourseData({
      name: '',
      description: '',
      syllabus: '',
      prerequisites: '',
      price: '',
    });
  };

  const editCourse = (id) => {
    console.log('Edit Course ID:', id);
  };

  const removeCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Container>
      <ContentWrapper>
        <button onClick={toggleMenu} className="lg:hidden p-2">
          <MenuButton size={30} /> {/* Use the styled MenuButton with blue color */}
        </button>
        
        <Title>Course Management</Title>

        <Form onSubmit={addCourse}>
          <Input
            type="text"
            name="name"
            placeholder="Course Name"
            value={courseData.name}
            onChange={handleInputChange}
            required
          />
          <TextArea
            name="description"
            placeholder="Course Description"
            value={courseData.description}
            onChange={handleInputChange}
            rows="3"
            required
          />
          <TextArea
            name="syllabus"
            placeholder="Syllabus"
            value={courseData.syllabus}
            onChange={handleInputChange}
            rows="3"
            required
          />
          <Input
            type="text"
            name="prerequisites"
            placeholder="Prerequisites"
            value={courseData.prerequisites}
            onChange={handleInputChange}
          />
          <Input
            type="number"
            name="price"
            placeholder="Course Price"
            value={courseData.price}
            onChange={handleInputChange}
            required
          />
          <Button type="submit">Add New Course</Button>
        </Form>

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

        <CourseTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Syllabus</th>
              <th>Prerequisites</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id}>
                <td>{course.name}</td>
                <td>{course.description}</td>
                <td>{course.syllabus}</td>
                <td>{course.prerequisites}</td>
                <td>{course.price}</td>
                <td>
                  <ActionButton onClick={() => editCourse(course.id)}>Edit</ActionButton>
                  <ActionButton onClick={() => removeCourse(course.id)}>Remove</ActionButton>
                </td>
              </tr>
            ))}
          </tbody>
        </CourseTable>
      </ContentWrapper>
    </Container>
  );
};

export default CourseManagement;
