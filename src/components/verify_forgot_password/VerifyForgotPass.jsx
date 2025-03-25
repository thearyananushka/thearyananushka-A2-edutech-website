import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SquareLoader } from 'react-spinners';

const VerifyForgotPass = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState('');
  const email = location.state?.email;

  useEffect(() => {
    if (!email) {
      toast.error('Invalid access. Email is required.');
      navigate('/auth/a2/forgotpassword'); // Redirect back if email is not available
    }
  }, [email, navigate]);

  const handleInputChange = (e) => {
    setOtp(e.target.value);
    setErrors('');
  };

  const validateOtp = () => {
    if (!otp) {
      return 'Please enter the OTP';
    } else if (!/^\d{6}$/.test(otp)) {
      return 'OTP must be a 6-digit number';
    }
    return '';
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    const error = validateOtp();
    if (error) {
      setErrors(error);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/a2/students/verify-resetpassotp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        toast.success('OTP verified successfully! Proceed to reset your password.');
        navigate('/auth/a2/reset-pass', { state: { email } });
      } else {
        toast.error(data.message || 'Invalid OTP. Please try again.');
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
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Verify OTP</h1>
        <p className="text-gray-600 text-center mb-4">
          Enter the OTP sent to <strong>{email}</strong> to verify and reset your password.
        </p>

        <form onSubmit={handleVerifyOTP} className="space-y-6">
          <div>
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
              OTP
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={handleInputChange}
              className={`mt-1 block w-full px-3 py-2 border ${errors ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              placeholder="Enter 6-digit OTP"
            />
            {errors && <p className="text-sm text-red-500 mt-1">{errors}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
              disabled={loading}
            >
              {loading ? <SquareLoader color="#fff" size={20} /> : 'Verify OTP'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyForgotPass;
