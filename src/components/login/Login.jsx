import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SquareLoader } from 'react-spinners';
import './Login.css' // Custom CSS for shake effect

import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios'; // Import axios

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [shake, setShake] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [id]: '' }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Please enter your email';
    }
    if (!formData.password) {
      newErrors.password = 'Please enter your password';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    setLoading(true);

    try {
      // API call using axios
      const response = await axios.post('http://localhost:8000/api/a2/students/login', formData, {
        withCredentials: true, 
      });

      // console.log('API response:', response.data);

      if (response.data.success && response.data.message.includes("OTP sent")) {
        toast.info('Please verify yourself!'); // Show toast for verification needed
        navigate('/auth/a2/verifylogin', { state: { email: formData.email } });
    } else {
        toast.success('Successfully signed in!');
        // console.log('Login successful:', response.data);
    }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'An error occurred during login';
      toast.error(errorMessage);
      console.error('Login error:', error);
    } finally {
      setLoading(false);
      setFormData({ email: '', password: '' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#F5F7FA]">
      <ToastContainer /> {/* Toast container for notifications */}


      <div className={`z-10 bg-white p-8 rounded-lg shadow-lg w-full max-w-md ${shake ? 'shake' : ''}`}>
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Sign in to your account</h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`mt-1 block w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <Link to="/auth/a2/forgotpassword" className="text-sm text-indigo-600 hover:underline">Forgot your password?</Link>
          </div>

          {/* Sign In Button with Spinner */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md bg-indigo-600 shadow-sm text-sm font-medium text-white  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
              disabled={loading}
            >
              {loading ? <SquareLoader color="#fff" size={20} /> : 'Sign in'}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
  <p className="text-sm text-gray-600">
    New to A2 Pyramid?{' '}
    <Link to="/auth/a2/signup" className="text-indigo-600 font-medium hover:underline">Create an account</Link>
  </p>
</div>

      </div>
    </div>
  );
};

export default Login;
