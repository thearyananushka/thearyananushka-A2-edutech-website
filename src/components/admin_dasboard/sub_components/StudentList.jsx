// StudentList.js
import React, { useState, useEffect } from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';
import AddEditStudent from './AddEditStudent';
import { FaBars,FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [showCourses, setShowCourses] = useState(null);
    

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
        setStudents(mockStudents.map((s, index) => ({ id: index + 1, ...s })));
    }, []);

    const handleDelete = (id) => {
        const updatedStudents = students.filter(student => student.id !== id);
        setStudents(updatedStudents.map((s, index) => ({ id: index + 1, ...s })));
    };

    const handleEdit = (student) => {
        setSelectedStudent(student);
        setIsModalOpen(true);
    };

    const handleSaveStudent = (student) => {
        if (student.id) {
            const updatedStudents = students.map(s =>
                s.id === student.id ? student : s
            );
            setStudents(updatedStudents);
        }
        setIsModalOpen(false);
    };

    const handleShowCourses = (courses) => {
        setShowCourses(courses);
    };
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
            <h2 className="text-3xl font-bold mb-6">Student Management</h2>

            <table className="table-auto w-full bg-white text-black rounded-lg shadow-md overflow-hidden">
                <thead>
                    <tr>
                        <th className="p-4 text-left text-lg font-semibold text-gray-700">ID</th>
                        <th className="p-4 text-left text-lg font-semibold text-gray-700">Name</th>
                        <th className="p-4 text-left text-lg font-semibold text-gray-700">Email</th>
                        <th className="p-4 text-left text-lg font-semibold text-gray-700">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id} className="border-b">
                            <td className="p-4 text-blue-600 font-bold text-lg">{student.id}</td>
                            <td className="p-4 text-gray-800">{student.name}</td>
                            <td className="p-4 text-gray-800">{student.email}</td>
                            <td className="p-4 flex gap-4">
                                <button
                                    onClick={() => handleEdit(student)}
                                    className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-700 transition"
                                >
                                    <FiEdit />
                                </button>
                                <button
                                    onClick={() => handleDelete(student.id)}
                                    className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-700 transition"
                                >
                                    <FiTrash />
                                </button>
                                <button
                                    onClick={() => handleShowCourses(student.courses)}
                                    className="bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-700 transition"
                                >
                                    Courses
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isModalOpen && (
                <AddEditStudent
                    student={selectedStudent}
                    onSave={handleSaveStudent}
                    onClose={() => setIsModalOpen(false)}
                />
            )}

            {showCourses && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Enrolled Courses</h3>
                        <ul className="list-disc list-inside">
                            {showCourses.map((course, index) => (
                                <li key={index} className="text-gray-700">{course}</li>
                            ))}
                        </ul>
                        <button
                            onClick={() => setShowCourses(null)}
                            className="mt-4 bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StudentList;
