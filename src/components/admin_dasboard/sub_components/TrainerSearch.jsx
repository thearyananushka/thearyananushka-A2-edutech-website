import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../AdminDashboard';
import { FaBars,FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const TrainerSearch = () => {
  const { searchQuery } = useContext(SearchContext);
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const mockTrainers = [
      { name: 'John Doe', expertise: 'MERN', email: 'john@example.com' },
      { name: 'Jane Smith', expertise: 'Backend', email: 'jane@example.com' },
    ];
    setTrainers(mockTrainers);
  }, []);

  
  const filteredTrainers = trainers.filter(
    (trainer) =>
      trainer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      searchQuery.toLowerCase().includes('all trainers')
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
      <h2 className="text-3xl font-bold mb-6">All Trainers</h2>
      <ul className="list-disc pl-6">
        {filteredTrainers.map((trainer) => (
          <li key={trainer.name}>
            {trainer.name} - {trainer.expertise} - {trainer.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainerSearch;
