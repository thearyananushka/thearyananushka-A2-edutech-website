// AdminDashboard.jsx
import "./AdminDashboard.css";
import React, { createContext, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./sub_components/Sidebar.jsx";
import Dashboard from "./sub_components/Dashboard.jsx";
import Trainer from "./sub_components/Trainer.jsx";
import StudentList from "./sub_components/StudentList.jsx";
import Settings from "./sub_components/Settings.jsx";
import CourseManagement from "./sub_components/CourseManagement.jsx";
import Payment from "./sub_components/Payment.jsx";
import ExamManagement from "./sub_components/ExamManagement.jsx";
import StudentSearch from "./sub_components/StudentSearch.jsx";
import TrainerSearch from "./sub_components/TrainerSearch.jsx";
import EditInfo from "./sub_components/EditInfo.jsx";

// Define and export SearchContext
export const SearchContext = createContext();

function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      <MainLayout />
    </SearchContext.Provider>
  );
}

// Main layout with conditional sidebar rendering
const MainLayout = () => {
  const location = useLocation();
  const noSidebarPaths = ["/admin-dashboard/login", "/admin-dashboard/signup"];
  const showSidebar = !noSidebarPaths.includes(location.pathname);

  return (
    <div className="flex h-screen overflow-hidden">
      {showSidebar && <Sidebar />}
      <div className={`flex-grow overflow-y-auto ${showSidebar ? "" : "w-full"}`}>
        <Routes>
        <Route path="/" element={<Dashboard />} />
<Route path="/trainer" element={<Trainer />} />
<Route path="/student" element={<StudentList />} />
<Route path="/students" element={<StudentSearch />} />
<Route path="/trainers" element={<TrainerSearch />} />
<Route path="/settings" element={<Settings />} />
<Route path="/course" element={<CourseManagement />} />
<Route path="/payment" element={<Payment />} />
<Route path="/exam" element={<ExamManagement />} />
<Route path="/edit-info" element={<EditInfo />} />

        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
