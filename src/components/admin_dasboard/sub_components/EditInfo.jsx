// EditInfo.jsx
import React, { useState } from 'react';
import { FaBars,FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const EditInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Save logic here (e.g., send data to backend)
    alert('Information updated successfully!');
  };

  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <button onClick={toggleMenu} className="text-3xl text-white lg:hidden">
          <FaBars />
        </button>
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Edit Your Information
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
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

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter new password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm new password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditInfo;
