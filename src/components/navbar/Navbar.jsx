import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaSearch, FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showExploreDropdown, setShowExploreDropdown] = useState(false);
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const exploreDropdownRef = useRef(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/a2/students/get-student",
          {
            withCredentials: true,
          }
        );
        setUser(response.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (exploreDropdownRef.current && !exploreDropdownRef.current.contains(event.target)) {
        setShowExploreDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:8000/api/a2/students/logout",
        {},
        {
          withCredentials: true,
        }
      );
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        <Link
          to="/"
          className="text-xl font-bold text-gray-600 flex items-center"
        >
          <img
            src="/img/logo2.png"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <div>Pyramid </div>
        </Link>

        <Link to="/about" className="hidden md:block text-gray-700 hover:text-blue-600 pr-11">
          <div className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            <span>About</span>
          </div>
        </Link>
        
        <div className="flex items-center space-x-6">
          <div className="relative cursor-pointer courses-dropdown" ref={exploreDropdownRef}>
            <div
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
              onClick={() => setShowExploreDropdown(!showExploreDropdown)}
            >
              <span>Courses</span>
              <FaChevronDown className="text-sm" />
            </div>

            {showExploreDropdown && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-50 font-bold text-sm">
                <Link to="/curriculum-ai-ml" className="p-2 hover:bg-gray-100 block">AI ML</Link>
                <Link to="/curriculum-data-analytics" className="p-2 hover:bg-gray-100 block">Data Analytics</Link>
                <Link to="/curriculum-data-science" className="p-2 hover:bg-gray-100 block">Data Science</Link>
                <Link to="/curriculum-mern-stack" className="p-2 hover:bg-gray-100 block">Mern Stack</Link>
                <Link to="/curriculum-devops" className="p-2 hover:bg-gray-100 block">DevOps</Link>
                <Link to="/curriculum-qa" className="p-2 hover:bg-gray-100 block">QA</Link>
              </div>
            )}
          </div>

          <div className="hidden md:flex items-center relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-14 py-2 w-80 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
              <FaSearch />
            </button>
          </div>
        </div>

        <Link to="/contact" className="hidden md:block text-gray-700 hover:text-blue-600 pr-11">
          Contact
        </Link>
        
        <div className="flex items-center">
          {user ? (
            <div className="relative flex items-center" ref={dropdownRef}>
              <img
                src={user.avatar || "/default-avatar.png"}
                alt="User Avatar"
                className="w-10 h-10 rounded-full cursor-pointer mr-6"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-md z-50">
                  <Link to="/profile" className="p-2 hover:bg-gray-100 block text-gray-700">Your Profile</Link>
                  <button className="p-2 hover:bg-gray-100 block text-gray-700 w-full text-left" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/auth/a2/login" className="text-gray-700 hover:text-blue-600">Login</Link>
              <Link to="/auth/a2/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Sign Up</Link>
            </div>
          )}
          <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FaBars className="text-2xl text-gray-700" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
