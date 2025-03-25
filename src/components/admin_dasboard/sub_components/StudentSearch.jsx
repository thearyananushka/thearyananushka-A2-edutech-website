import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../AdminDashboard';
import { FaBars,FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const StudentSearch = () => {
  const { searchQuery } = useContext(SearchContext);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const mockStudents = [
        { name: 'Alice Johnson', email: 'alice@example.com', courses: ['MERN', 'AI'] },
        { name: 'Bob Smith', email: 'bob@example.com', courses: ['Backend', 'Data Science'] },
        { name: 'Charlie Davis', email: 'charlie@example.com', courses: ['Frontend'] },
        { name: 'David Johnson', email: 'david@example.com', courses: ['ML', 'AI'] },
        { name: 'Emily Clark', email: 'emily@example.com', courses: ['Data Science'] },
        { name: 'Frank White', email: 'frank@example.com', courses: ['Backend', 'Frontend'] },
        { name: 'Grace Lee', email: 'grace@example.com', courses: ['MERN'] },
        { name: 'Hannah Adams', email: 'hannah@example.com', courses: ['AI', 'ML'] },
        { name: 'Ivy Brown', email: 'ivy@example.com', courses: ['Frontend', 'Backend'] },
        { name: 'Jack Wilson', email: 'jack@example.com', courses: ['Data Science', 'ML'] },
    ];
    setStudents(mockStudents);
  }, []);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    searchQuery.toLowerCase().includes('all students') 
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="bg-blue-500 text-white min-h-screen p-6">
    <button onClick={toggleMenu} className="text-3xl text-white lg:hidden">
          <FaBars />
        </button>
        {menuOpen && (
        <div className="fixed inset-0 bg-blue-900 bg-opacity-95 z-50 flex flex-col items-center justify-center text-white">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-3xl"
          >
            <FaTimes />
          </button>
          <nav className="flex flex-col gap-6 text-center text-lg">
            <Link
              to="/dashboard"
              onClick={() => handleNavigate("/dashboard")}
              className="hover:underline"
            >
              Home
            </Link>
            <Link
              to="/trainer"
              onClick={() => handleNavigate("/trainer")}
              className="hover:underline"
            >
              Trainer Section
            </Link>
            <Link
              to="/student"
              onClick={() => handleNavigate("/student")}
              className="hover:underline"
            >
              Student Section
            </Link>
            <Link
              to="/course"
              onClick={() => handleNavigate("/course")}
              className="hover:underline"
            >
              Course Section
            </Link>
            <Link
              to="/exam"
              onClick={() => handleNavigate("/exam")}
              className="hover:underline"
            >
              Exam
            </Link>
            <Link
              to="/payment"
              onClick={() => handleNavigate("/payment")}
              className="hover:underline"
            >
              Payment
            </Link>
            <Link
              to="/help"
              onClick={() => handleNavigate("/help")}
              className="hover:underline"
            >
              Help Centre
            </Link>
            <Link
              to="/settings"
              onClick={() => handleNavigate("/settings")}
              className="hover:underline"
            >
              Settings
            </Link>
            <Link
              to="/report"
              onClick={() => handleNavigate("/report")}
              className="hover:underline"
            >
              Report
            </Link>
          </nav>
        </div>
      )}
      <h2 className="text-3xl font-bold mb-6">All  Students</h2>

      <ul className="list-disc pl-6">
        {filteredStudents.map((student) => (
          <li key={student.name}>
            {student.name} - {student.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentSearch;
