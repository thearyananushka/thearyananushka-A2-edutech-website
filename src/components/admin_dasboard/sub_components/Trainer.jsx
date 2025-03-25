// TrainerList.js
import React, { useState, useEffect } from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';
import AddEditTrainer from './AddEditTrainer';
import { FaBars,FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Trainer = () => {
  const [trainers, setTrainers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  useEffect(() => {
    const mockTrainers = [
      { id: 1, name: 'John Doe', expertise: 'MERN', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', expertise: 'BACK-END', email: 'jane@example.com' },
    ];
    setTrainers(mockTrainers);
  }, []);

  const handleDelete = (id) => {
    const updatedTrainers = trainers.filter((trainer) => trainer.id !== id);
    setTrainers(updatedTrainers);
  };

  const handleEdit = (trainer) => {
    setSelectedTrainer(trainer);
    setIsModalOpen(true);
  };

  const handleAddTrainer = () => {
    setSelectedTrainer(null);
    setIsModalOpen(true);
  };

  const handleSaveTrainer = (trainer) => {
    if (trainer.id) {
      const updatedTrainers = trainers.map((t) =>
        t.id === trainer.id ? trainer : t
      );
      setTrainers(updatedTrainers);
    } else {
      const newTrainer = { ...trainer, id: Date.now() };
      setTrainers([...trainers, newTrainer]);
    }
    setIsModalOpen(false);
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="bg-blue-500 text-white min-h-screen p-6 overflow-auto">
      <button onClick={toggleMenu} className="text-3xl text-white lg:hidden">
          <FaBars />
        </button>
      <h2 className="text-3xl font-bold mb-6">Trainer Management</h2>
      <button
        onClick={handleAddTrainer}
        className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-300 transition"
      >
        Add Trainer
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {trainers.map((trainer) => (
          <div
            key={trainer.id}
            className="bg-white text-black p-6 rounded-lg shadow-md flex flex-col gap-4"
          >
            <h3 className="text-xl font-semibold">{trainer.name}</h3>
            <p className="text-sm">Expertise: {trainer.expertise}</p>
            <p className="text-sm">Email: {trainer.email}</p>
            <div className="flex gap-2 mt-auto">
              <button
                onClick={() => handleEdit(trainer)}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                <FiEdit />
              </button>
              <button
                onClick={() => handleDelete(trainer.id)}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
              >
                <FiTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
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

      {isModalOpen && (
        <AddEditTrainer
          trainer={selectedTrainer}
          onSave={handleSaveTrainer}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Trainer;
