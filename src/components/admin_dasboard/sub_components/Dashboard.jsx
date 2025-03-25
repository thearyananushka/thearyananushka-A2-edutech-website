import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip as LineTooltip,
} from "recharts";
import { FaUserEdit, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const data = [
  { name: "Frontend", students: 100 },
  { name: "Backend", students: 50 },
  { name: "Full Stack Courses", students: 150 },
  { name: "Data Science", students: 200 },
  { name: "AI & ML", students: 180 },
];

const pieData = [
  { name: "Data Science", value: 30 },
  { name: "AI & ML", value: 25 },
  { name: "Frontend", value: 20 },
  { name: "Backend", value: 10 },
  { name: "Full Stack", value: 15 },
];

const Dashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility
  const [adminData, setAdminData] = useState(null); // State to store admin data
  const [loading, setLoading] = useState(true); // State to handle loading
  const navigate = useNavigate();

  // Fetch admin data on component mount
  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/a2/admin/get-admin");
        console.log(response.status);
    console.log(response.headers.get("Content-Type"));
        const data = await response.json();
        console.log("API Response: ", data);
        if (data.success) {
          setAdminData(data.data); // Set admin data if successful
        } else {
          console.error("Failed to fetch admin data");
        }
      } catch (error) {
        console.error("Error fetching admin data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchAdminData();
  }, []);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMenu = () => setMenuOpen(!menuOpen); // Toggle menu state

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false); // Close menu after navigation
  };

  return (
    <div className="dashboard bg-gray-200 min-h-screen">
      {/* Header Section */}
      <div className="relative bg-blue-500 text-white p-6 md:p-10 rounded-b-lg shadow-md flex justify-between items-center">
        <button onClick={toggleMenu} className="text-3xl text-white lg:hidden">
          <FaBars />
        </button>
        <h1 className="text-3xl font-bold">WELCOME BACK ADMIN 👋</h1>

        {/* Profile Section */}
        <div className="relative">
          {/* Display loading state while fetching */}
          {loading ? (
            <div className="w-12 h-12 rounded-full bg-gray-300 animate-pulse"></div>
          ) : (
            <img
              src={adminData?.avatar || "https://via.placeholder.com/150"}
              alt={adminData?.name || "Admin"}
              className="w-12 h-12 rounded-full cursor-pointer"
              onClick={toggleDropdown}
            />
          )}

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
              <ul className="py-2">
                <li
                  className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer text-gray-800"
                  onClick={() => handleNavigate("/edit-info")}
                >
                  <FaUserEdit className="mr-2 text-gray-500" /> Edit Info
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer text-gray-800"
                  onClick={() => handleNavigate("/")}
                >
                  <FaSignOutAlt className="mr-2 text-gray-500" /> Log Out
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Full-Screen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-blue-900 bg-opacity-95 z-50 flex flex-col items-center justify-center text-white">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-3xl"
          >
            <FaTimes />
          </button>
          <nav className="flex flex-col gap-6 text-center text-lg">
            <Link
              to="/dashboard"
              onClick={() => handleNavigate("/dashboard")}
              className="hover:underline"
            >
              Home
            </Link>
            <Link
              to="/trainer"
              onClick={() => handleNavigate("/trainer")}
              className="hover:underline"
            >
              Trainer Section
            </Link>
            <Link
              to="/student"
              onClick={() => handleNavigate("/student")}
              className="hover:underline"
            >
              Student Section
            </Link>
            <Link
              to="/course"
              onClick={() => handleNavigate("/course")}
              className="hover:underline"
            >
              Course Section
            </Link>
            <Link
              to="/exam"
              onClick={() => handleNavigate("/exam")}
              className="hover:underline"
            >
              Exam
            </Link>
            <Link
              to="/payment"
              onClick={() => handleNavigate("/payment")}
              className="hover:underline"
            >
              Payment
            </Link>
            <Link
              to="/help"
              onClick={() => handleNavigate("/help")}
              className="hover:underline"
            >
              Help Centre
            </Link>
            <Link
              to="/settings"
              onClick={() => handleNavigate("/settings")}
              className="hover:underline"
            >
              Settings
            </Link>
            <Link
              to="/report"
              onClick={() => handleNavigate("/report")}
              className="hover:underline"
            >
              Report
            </Link>
          </nav>
        </div>
      )}

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-10 mt-6">
        <div className="card bg-white shadow-md rounded-lg p-6 border border-gray-300">
          <h3 className="text-lg font-semibold text-gray-700">
            Total Students Enrolled :
          </h3>
          <h1 className="text-4xl font-bold text-gray-900">10</h1>
          <p className="percentage text-green-500 font-semibold text-lg">
            +12%
          </p>
          <button
            className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-blue-600"
            onClick={() => handleNavigate("/students")}
          >
            Explore more ➡️
          </button>
        </div>

        <div className="card bg-white shadow-md rounded-lg p-6 border border-gray-300">
          <h3 className="text-lg font-semibold text-gray-700">
            Total Trainers :
          </h3>
          <h1 className="text-4xl font-bold text-gray-900">5</h1>
          <p className="percentage text-green-500 font-semibold text-lg">
            +12%
          </p>
          <button
            className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-blue-600"
            onClick={() => handleNavigate("/trainers")}
          >
            Explore more ➡️
          </button>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-10 mt-10">
        {/* Bar Chart */}
        <div className="bar-chart bg-white shadow-md rounded-lg p-6 border border-gray-300">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Number of Students Enrolled in Different Courses
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="students" fill="#FFA500" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="pie-chart bg-white shadow-md rounded-lg p-6 border border-gray-300">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Student Distribution Across Courses
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={index % 2 === 0 ? "#FF7300" : "#FFBB28"} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="line-chart bg-white shadow-md rounded-lg p-6 border border-gray-300">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Student Growth Over Time
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <Line type="monotone" dataKey="students" stroke="#FF7300" />
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <LineTooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
