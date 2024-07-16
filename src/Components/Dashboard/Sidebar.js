// src/Sidebar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button 
        className="md:hidden p-4 text-white bg-gray-800"
        onClick={handleToggle}
      >
        ☰
      </button>
      <div className={`h-screen w-64 bg-gray-800 text-white flex flex-col fixed md:fixed  ${isOpen ? 'block' : 'hidden'} md:block`}>
        <div className="flex items-center justify-center h-20 border-b border-gray-700">
          <h1 className="text-2xl font-semibold">AC Service</h1>
        </div>
        <div className="flex flex-col flex-grow">
          <Link 
            to="/dashboard" 
            className="px-4 py-2 hover:bg-gray-700"
            onClick={handleNavigation}
          >
            Dashboard
          </Link>
          <Link 
            to="/login" 
            className="px-4 py-2 hover:bg-gray-700"
            onClick={handleNavigation}
          >
            Login
          </Link>
          <Link 
            to="/register" 
            className="px-4 py-2 hover:bg-gray-700"
            onClick={handleNavigation}
          >
            Register
          </Link>
          {/* <Link 
            to="/upcoming" 
            className="px-4 py-2 hover:bg-gray-700"
            onClick={handleNavigation}
          >
            Upcoming
          </Link> */}
          {/* <Link 
            to="/installed" 
            className="px-4 py-2 hover:bg-gray-700"
            onClick={handleNavigation}
          >
            Installed
          </Link> */}
          <Link 
            to="/register-installation" 
            className="px-4 py-2 hover:bg-gray-700"
            onClick={handleNavigation}
          >
            Add New
          </Link>
          <div className="mt-auto px-4 py-2 hover:bg-gray-700">
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );

  function handleLogout() {
    // Implement your logout functionality here
    alert('Logout clicked');
  }
};

export default Sidebar;
