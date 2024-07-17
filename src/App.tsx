import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/footer";
import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/AboutUs/aboutUs";
import AuthLayout from "./components/AuthLayout/AuthLayout";
import Login from "./components/LoginModal/LoginForm/Login";
import Signup from "./components/LoginModal/SignUP/SignUp";
import ForgotPassword from "./components/LoginModal/ForgetPass/ForgetPass";
import LoginPage from "./pages/LoginPage/login";
function App() {

  return (
    <>
      <Navbar/> 
      <Routes>
        
        <Route path='/about-us' element={<About/>} />
        <Route index path="/login" element={<LoginPage/>} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage/>} />
            <Route path="signup" element={<Signup />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route> */}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
