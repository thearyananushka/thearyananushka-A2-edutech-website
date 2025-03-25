import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    avatar: null,
    password: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/a2/students/get-student', {
          withCredentials: true,
        });
        setUserData(response.data);
        setFormData({ ...formData, name: response.data.name });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    if (formData.avatar) {
      formDataToSend.append('avatar', formData.avatar);
    }
    if (formData.password) {
      formDataToSend.append('password', formData.password);
    }

    try {
      await axios.patch('http://localhost:8000/api/a2/students/update-avatar', formDataToSend, {
        withCredentials: true,
      });
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <form onSubmit={handleUpdateProfile} className="space-y-4">
        <div>
          <label className="block mb-2 text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-600">Avatar</label>
          <input
            type="file"
            name="avatar"
            onChange={handleInputChange}
            className="w-full"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-600">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Change password"
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
