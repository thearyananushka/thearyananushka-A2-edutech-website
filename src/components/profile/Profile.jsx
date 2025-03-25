import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/a2/students/get-student", { withCredentials: true });
        setUser(response.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const response = await axios.patch(
        "http://localhost:8000/api/a2/students/update-avatar",
        formData,
        { withCredentials: true, headers: { "Content-Type": "multipart/form-data" } }
      );
      setUser((prev) => ({ ...prev, avatar: response.data.avatar }));
    } catch (error) {
      console.error("Error updating avatar:", error);
    }
  };

  if (loading) return <div className="text-center py-10 text-lg font-semibold">Loading...</div>;
  if (!user) return <div className="text-center py-10 text-lg font-semibold">User not found</div>;

  return (
    <div className="max-w-5xl mx-auto mt-12 p-8 bg-white shadow-lg rounded-xl border border-gray-200">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Profile</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Avatar Section */}
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          <img src={user.avatar || "/default-avatar.png"} alt="Avatar" className="w-full h-full rounded-full border-4 border-gray-300 shadow-lg" />
          <label className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 shadow-md">
            <FaEdit className="text-lg" />
            <input type="file" className="hidden" accept="image/*" onChange={handleAvatarChange} />
          </label>
        </div>

        {/* Info Section */}
        <div className="flex-1 space-y-4">
          <div className="bg-gray-100 p-4 rounded-md shadow-sm">
            <h3 className="text-xl font-semibold text-gray-700">{user.username}</h3>
            <p className="text-gray-600">📧 {user.email}</p>
            <p className="text-gray-600">📞 {user.phone}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-4 rounded-md shadow-sm">
              <p className="text-gray-700 font-semibold">Highest Qualification</p>
              <p className="text-gray-600">{user.highestQualification || "Not provided"}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-sm">
              <p className="text-gray-700 font-semibold">Date of Birth</p>
              <p className="text-gray-600">{new Date(user.dateOfBirth).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
