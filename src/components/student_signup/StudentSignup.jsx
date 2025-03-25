import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SquareLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';





const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    phone: '',
    dateOfBirth: '',
    highestQualification: '',
    avatar: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
  
    if (!formData.username) {
      newErrors.username = 'Username is required';
    }
  
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
  
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number format';
    }
  
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
    }
  
    if (!formData.highestQualification) {
      newErrors.highestQualification = 'Qualification is required';
    }
  
    if (!formData.avatar) {
      newErrors.avatar = 'Avatar is required';
    }
  
    return newErrors;
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        const data = new FormData();
        Object.keys(formData).forEach(key => {
          data.append(key, key === 'avatar' ? formData[key] : formData[key]);
        });
  
        const response = await axios.post('http://localhost:8000/api/a2/students/register', data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        toast.success('Account created successfully!');
        navigate('/auth/a2/verify-signup', { state: { email: formData.email } });
      } catch (error) {
        toast.error(error.response?.data?.message || 'Signup failed. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };
  

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setFormData({
      ...formData,
      [id]: files ? files[0] : value, // Handle file input for avatar
    });
    setErrors({
      ...errors,
      [id]: '', // Clear error as user types
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col lg:flex-row w-full lg:w-10/12 xl:w-8/12 shadow-lg rounded-lg overflow-hidden">
        <div className="hidden lg:flex lg:w-1/2 bg-white p-8 flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">A2 Pyramid</h1>
          <ul className="space-y-6">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="ml-3 text-lg text-gray-600">Get started quickly</span>
            </li>
            <li className="text-sm text-gray-500 ml-9">Integrate with developer-friendly APIs or choose low-code or pre-built solutions.</li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="ml-3 text-lg text-gray-600">All types of projects</span>
            </li>
            <li className="text-sm text-gray-500 ml-9">MERN, AI, SaaS platforms, and more.</li>
          </ul>
        </div>

        <div className="w-full lg:w-1/2 bg-gray-100 p-8 flex justify-center items-center">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Create your account</h2>
            <form onSubmit={handleSubmit}>
              {/* Email Input */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Username Input */}
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Your name</label>
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="John Doe"
                />
                {errors.username && <p className="text-red-600 text-sm mt-1">{errors.username}</p>}
              </div>

              {/* Phone Number Input */}
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="text"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="+1234567890"
                />
                {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* Date of Birth Input */}
              <div className="mb-4">
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.dateOfBirth && <p className="text-red-600 text-sm mt-1">{errors.dateOfBirth}</p>}
              </div>

              {/* Highest Qualification Input */}
              <div className="mb-4">
                <label htmlFor="highestQualification" className="block text-sm font-medium text-gray-700">Highest Qualification</label>
                <input
                  type="text"
                  id="highestQualification"
                  value={formData.highestQualification}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="e.g., BSc IT"
                />
                {errors.highestQualification && <p className="text-red-600 text-sm mt-1">{errors.highestQualification}</p>}
              </div>

              {/* Avatar Input */}
              <div className="mb-4">
                <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">Avatar</label>
                <input
                  type="file"
                  id="avatar"
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  accept="image/*"
                />
                {errors.avatar && <p className="text-red-600 text-sm mt-1">{errors.avatar}</p>}
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your password"
                  autoComplete="new-password" 
                />
                {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md mt-4"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex justify-center items-center">
                    <SquareLoader color="#fff" size={16} />
                    <span className="ml-2">Submitting...</span>
                  </div>
                ) : (
                  'Sign up'
                )}
              </button>
            </form>

            <ToastContainer position="top-right" autoClose={3000} hideProgressBar closeOnClick pauseOnHover draggable />
            <p className="text-sm text-gray-600 mt-4">
              Already have an account?{' '}
              <Link to="/login" className="text-indigo-600 hover:underline">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
