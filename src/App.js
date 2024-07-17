import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/Navbar/Home";
import About from "./Components/Navbar/About";
// import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Sidebar from "./Components/Dashboard/Sidebar";
import Login from "./Components/Forms/Login";
import Register from "./Components/Forms/Register";
import Footer from "./Components/Footer/Footer";
import RegisterInstallation from "./Components/Forms/RegisterInstallation";
import UpdateInstallation from "./Components/Forms/UpdateInstallation";
import ReminderDetails from "./Components/Dashboard/ReminderDetails";

function Layout() {
  const location = useLocation();
  const noSidebarPaths = ['/login', '/register'];

  return (
    <div className="flex">
      {!noSidebarPaths.includes(location.pathname) && <Sidebar />}
      <div className={`flex-grow ${!noSidebarPaths.includes(location.pathname) ? 'md:ml-64' : ''}`}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register-installation" element={<RegisterInstallation />} />
          <Route path="/update-reminder/:remindId" element={<UpdateInstallation />} />
          <Route path="/reminder/:remindId" element={<ReminderDetails />} />
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
