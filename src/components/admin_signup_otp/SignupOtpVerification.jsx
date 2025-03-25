import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignupOtpVerification.css'; // Optional custom styles

const SignupOtpVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state || {}; // Retrieve the email from the state
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otp) {
      toast.error('Please enter the OTP');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/api/a2/admin/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });

      if (!response.ok) {
        throw new Error('Failed to verify OTP');
      }

      toast.success('OTP verified successfully!');
      navigate('/admin-login'); // Redirect to admin login page
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <ToastContainer />
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Verify OTP</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              readOnly
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">OTP</label>
            <input
              type="text"
              value={otp}
              onChange={handleChange}
              placeholder="Enter your OTP"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200"
            disabled={loading}
          >
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupOtpVerification;
