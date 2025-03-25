import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SquareLoader } from 'react-spinners';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupOtp = () => {
  const { state } = useLocation(); // Get email from the previous state
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate OTP format (e.g., must be 6 digits)
    if (!/^\d{6}$/.test(otp)) {
      setError('OTP must be a 6-digit number');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/a2/students/verify-otp', {
        email: state.email,
        otp: otp,
      });

      if (response.data.success) {
        toast.success('Verification successful! Redirecting...');
        setTimeout(() => {
          navigate('/auth/a2/login');
        }, 2000);
      } else {
        setError(response.data.message || 'Verification failed.');
        toast.error(response.data.message || 'Verification failed.');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Failed to verify OTP. Please try again.';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
      setOtp('');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      <ToastContainer />
      <div className="z-10 bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Verify Your Email</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={state.email}
              readOnly
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
              OTP
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={handleChange}
              required
              className={`mt-1 block w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              placeholder="Enter your OTP"
            />
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              loading ? 'bg-indigo-300' : 'bg-indigo-600 hover:bg-indigo-700'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <SquareLoader color="#fff" size={16} />
                <span className="ml-2">Verifying...</span>
              </div>
            ) : (
              'Verify'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupOtp;
