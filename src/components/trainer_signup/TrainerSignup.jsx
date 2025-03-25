import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { SquareLoader } from 'react-spinners';
import 'react-toastify/dist/ReactToastify.css';
import './TrainerSignup.css';

const TrainerSignup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    uniqueCode: '',
    password: '',
    avatar: null,
    subjectname: '',
  });

  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, uniqueCode, password, subjectname } = formData;

    if (!username || !email || !uniqueCode || !password || !subjectname) {
      setShake(true);
      toast.error('Please fill out all fields');
      setTimeout(() => setShake(false), 500);
      return;
    }

    setLoading(true);

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      const response = await fetch('http://localhost:8000/api/a2/trainer/register', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Failed to sign up');
      }

      toast.success('Registration successful! Redirecting...');
      setTimeout(() => {
        setLoading(false);
        navigate('/otp-verification');
      }, 2000);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <ToastContainer />
      <div className={`bg-white rounded-xl shadow-2xl p-10 w-full max-w-lg ${shake ? 'animate-shake' : ''}`}>
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Trainer Signup</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label className="block text-gray-600 font-semibold">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-1">
            <label className="block text-gray-600 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-1">
            <label className="block text-gray-600 font-semibold">Unique Code</label>
            <input
              type="text"
              name="uniqueCode"
              placeholder="Enter your unique code"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-1">
            <label className="block text-gray-600 font-semibold">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-1">
            <label className="block text-gray-600 font-semibold">Avatar</label>
            <input
              type="file"
              name="avatar"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none"
              onChange={handleChange}
              accept="image/*"
            />
          </div>
          <div className="space-y-1">
            <label className="block text-gray-600 font-semibold">Subject Name</label>
            <input
              type="text"
              name="subjectname"
              placeholder="Enter the subject name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-200 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? <SquareLoader color="#fff" size={20} /> : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TrainerSignup;
