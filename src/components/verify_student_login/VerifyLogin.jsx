import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SquareLoader } from 'react-spinners';
import axios from 'axios';
import './VerifyLogin.css'; 
import Cookies from 'js-cookie';

const VerifyLogin = () => {
  const { state } = useLocation(); // Get email from the previous state
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate OTP format (example: must be 6 digits)
  if (!/^\d{6}$/.test(otp)) {
    setError('OTP must be a 6-digit number');
    setLoading(false);
    return;
  }

    try {
      const response = await axios.post('http://localhost:8000/api/a2/students/verify-login', {
        email: state.email,
        otp: otp,
      });

    //   // Set the tokens as cookies
    Cookies.set('accessToken', response.data.data.accessToken, { expires: 1 }); // expires in 1 day
    Cookies.set('refreshToken', response.data.data.refreshToken, { expires: 15 }); 

    //   console.log('API response:', response.data);

      toast.success('Verification successful! Redirecting...');
      setTimeout(() => {
        navigate('/'); 
      }, 2000);
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'An error occurred during verification';
      toast.error(errorMessage);
      setError(errorMessage);
    } finally {
      setLoading(false);
      setOtp('');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#F5F7FA]">
      <ToastContainer />
      <div className="z-10 bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Verify Your Login</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
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
              onChange={(e) => setOtp(e.target.value)}
              className={`mt-1 block w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              placeholder="Enter your OTP"
              required
            />
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md bg-indigo-600 shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
              disabled={loading}
            >
              {loading ? <SquareLoader color="#fff" size={20} /> : 'Verify OTP'}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Didn't receive the OTP?{' '}
            <button
              className="text-indigo-600 font-medium hover:underline"
              onClick={() => {
                // Logic to resend OTP if applicable
                toast.info('Resend OTP functionality not implemented yet.');
              }}
            >
              Resend OTP
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyLogin;
