import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import "./App.css";
import Home from "./Components/Home";
import AdminLogin from "./Components/AdminLogin";
import Admin from "./Components/Admin";
import AddItem from "./Components/AddItem";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Dashboard from "./Components/Dashboard";
import UsersList from "./Components/UsersList";
import Inventory from "./Components/Inventory";
import LoginPortal from "./Components/LoginPortal";

import AddUser from "./Components/AddUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPortal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userslist" element={<UsersList />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/loginportal" element={<LoginPortal />} />
        {/* Add more routes as you build more pages */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
