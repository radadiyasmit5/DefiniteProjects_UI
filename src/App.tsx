import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/footer";
import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/AboutUs/aboutUs";
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
