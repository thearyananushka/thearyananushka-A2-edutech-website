import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SquareLoader } from 'react-spinners';

const ForgotPassword = ({ onOTPSent }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setErrors('');
  };

  const validateEmail = () => {
    if (!email) {
      return 'Please enter your email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      return 'Please enter a valid email';
    }
    return '';
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    const error = validateEmail();
    if (error) {
      setErrors(error);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/a2/students/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        toast.success('OTP sent to your email!');
        onOTPSent && onOTPSent(email); // Only call if provided
        navigate('/auth/a2/verify-forgotpass', { state: { email } });
      } else {
        toast.error(data.message || 'Failed to send OTP. Please try again.');
      }
    } catch (error) {
      setLoading(false);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F7FA]">
      <ToastContainer />
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Forgot Password</h1>
        <p className="text-gray-600 text-center mb-4">
          Enter your email to receive an OTP for resetting your password.
        </p>

        <form onSubmit={handleSendOTP} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleInputChange}
              className={`mt-1 block w-full px-3 py-2 border ${errors ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              placeholder="you@example.com"
            />
            {errors && <p className="text-sm text-red-500 mt-1">{errors}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
              disabled={loading}
            >
              {loading ? <SquareLoader color="#fff" size={20} /> : 'Send OTP'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
