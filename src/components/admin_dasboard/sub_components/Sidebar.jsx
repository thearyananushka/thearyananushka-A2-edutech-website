import React, { useState, useContext, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchContext } from '../AdminDashboard';
import { FaBars, FaTimes, FaSearch, FaHome, FaUsers, FaChalkboardTeacher, FaBook, FaCog, FaDollarSign, FaQuestionCircle, FaFileAlt } from 'react-icons/fa';

function Sidebar() {
  const [query, setQuery] = useState('');
  const { setSearchQuery } = useContext(SearchContext);
  const navigate = useNavigate();
  const [searchType, setSearchType] = useState('students');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prevState) => !prevState);
  }, []);

  // Handle search form submission
  const handleSearch = useCallback(
    (e) => {
      e.preventDefault();
      setSearchQuery(query);
      const route = searchType === 'students' ? '/admin-dashboard/students' : '/admin-dashboard/trainers';
      navigate(route);
      setIsSidebarOpen(false);
    },
    [query, searchType, navigate, setSearchQuery]
  );

  // Render sidebar link buttons with icons
  const renderLinkButton = useCallback(
    (path, label, icon) => (
      <Link to={`/admin-dashboard${path}`} onClick={() => setIsSidebarOpen(false)} key={label}>
        <button
          className="flex items-center w-full h-12 px-4 bg-blue-700 rounded-md text-white font-semibold hover:bg-blue-600 transition-all ease-in-out"
          aria-label={label}
        >
          <span className="mr-3 text-xl">{icon}</span>
          <span>{label}</span>
        </button>
      </Link>
    ),
    []
  );

  return (
    <>
      {/* Sidebar Toggle Button for Small Screens */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 text-white text-2xl"
        aria-label="Toggle sidebar"
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar for Large Screens and Overlay Menu for Small Screens */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-blue-800 to-blue-600 p-6 pt-20 flex flex-col gap-6 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:relative lg:flex lg:w-64 lg:top-0`}
      >
        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-6 flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="w-full p-3 rounded-md text-black bg-white shadow-sm focus:outline-none"
              aria-label="Select search type"
            >
              <option value="students">All Students</option>
              <option value="trainers">All Trainers</option>
            </select>
            <button
              type="submit"
              className="p-3 bg-blue-600 rounded-md text-white hover:bg-blue-500 transition-all"
              aria-label="Submit search"
            >
              <FaSearch />
            </button>
          </div>
          <input
            type="text"
            placeholder={`Search ${searchType}`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-3 rounded-md text-black bg-white shadow-sm focus:outline-none"
            aria-label={`Search ${searchType}`}
          />
        </form>

        {/* Sidebar Links with Icons */}
        <div className="flex-grow overflow-y-auto">
          {[
            { path: '', label: 'Home', icon: <FaHome /> },
            { path: '/trainer', label: 'Trainer Section', icon: <FaChalkboardTeacher /> },
            { path: '/student', label: 'Student Section', icon: <FaUsers /> },
            { path: '/course', label: 'Course Section', icon: <FaBook /> },
            { path: '/exam', label: 'Exam', icon: <FaFileAlt /> },
            { path: '/payment', label: 'Payment', icon: <FaDollarSign /> },
            { path: '/help', label: 'Help Centre', icon: <FaQuestionCircle /> },
            { path: '/settings', label: 'Settings', icon: <FaCog /> },
            { path: '/report', label: 'Report', icon: <FaFileAlt /> },
          ].map(({ path, label, icon }) => renderLinkButton(path, label, icon))}
        </div>
      </div>

      {/* Overlay for Small Screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default Sidebar;
