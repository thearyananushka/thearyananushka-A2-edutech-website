import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { BeatLoader } from 'react-spinners';
import 'react-toastify/dist/ReactToastify.css';
import './AdminSignup.css'; // Optional for additional styling

const AdminSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    avatar: null,
    role: 'admin',  // Default value for role
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
    const { name, email, password, role } = formData;

    if (!name || !email || !password || !formData.avatar) {
      setShake(true);
      toast.error('Please fill out all required fields');
      setTimeout(() => setShake(false), 500);
      return;
    }

    setLoading(true);

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      const response = await fetch('http://localhost:8000/api/a2/admin/register', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Failed to register');
      }

      toast.success('Registration successful! Redirecting...');
      setTimeout(() => {
        setLoading(false);
        navigate('/admin-otp-verification', { state: { email } });
      }, 2000);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <ToastContainer />
      <div className={`bg-white shadow-2xl rounded-lg p-8 w-full max-w-md ${shake ? 'animate-shake' : ''}`}>
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Admin Signup</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Role</label>
            <select
              name="role"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
              required
            >
              <option value="admin">Admin</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Avatar</label>
            <input
              type="file"
              name="avatar"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
              onChange={handleChange}
              accept="image/*"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-200 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? <BeatLoader color="#fff" size={10} /> : 'Sign Up'}
          </button>
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/admin-login" className="text-indigo-600 hover:text-indigo-700 font-semibold underline">
                Log In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminSignup;
