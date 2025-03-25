import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SquareLoader } from 'react-spinners';

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
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
    setNewPassword(e.target.value);
    setErrors('');
  };

  const validatePassword = () => {
    if (!newPassword) {
      return 'Please enter your new password';
    } else if (newPassword.length < 6) {
      return 'Password must be at least 6 characters long';
    }
    return '';
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const error = validatePassword();
    if (error) {
      setErrors(error);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/a2/students/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, newPassword }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        toast.success('Password reset successfully! You can now log in with your new password.');
        navigate('/auth/a2/login');
      } else {
        toast.error(data.message || 'Failed to reset password. Please try again.');
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
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Reset Password</h1>
        <p className="text-gray-600 text-center mb-4">
          Enter your new password to reset your account password.
        </p>

        <form onSubmit={handleResetPassword} className="space-y-6">
          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={handleInputChange}
              className={`mt-1 block w-full px-3 py-2 border ${errors ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              placeholder="Enter your new password"
            />
            {errors && <p className="text-sm text-red-500 mt-1">{errors}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
              disabled={loading}
            >
              {loading ? <SquareLoader color="#fff" size={20} /> : 'Reset Password'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
