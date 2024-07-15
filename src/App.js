// import React from 'react'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import ShowReminders from './Components/ShowReminders'
// import RemindForm  from './Components/ReminderForm'

// function App() {
//   return (
//    <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<ShowReminders />} />
//       <Route path="/about" element={<RemindForm />} />
//     </Routes>
//    </BrowserRouter>
//   )
// }

// export default App

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/Navbar/Home";
import About from "./Components/Navbar/About";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import ACInstallationForm from "./Components/Forms/ACInstallationForm";
import Sidebar from "./Components/Dashboard/Sidebar";
import Login from "./Components/Forms/Login";
import Register from "./Components/Forms/Register";
import Footer from "./Components/Footer/Footer";
import RegisterInstallation from "./Components/Forms/RegisterInstallation";

function Layout() {
  const location = useLocation();
  const noSidebarPaths = ['/login', '/register'];

  return (
    <div className="flex">
      {!noSidebarPaths.includes(location.pathname) && <Sidebar />}
      <div className={`flex-grow ${!noSidebarPaths.includes(location.pathname) ? 'md:ml-64' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register-installation" element={<RegisterInstallation />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
