import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Link } from "react-router-dom";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { FaHome } from 'react-icons/fa';
import {BsPeople} from 'react-icons/bs';
import Portfolio from "./components/portfolio";


const App = () => {
  useEffect(() => {
    document.title = "Freelance NetSuite Developer";
  }, []);

  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light" style={{paddingLeft: "24px"}}>
        <a className="navbar-brand"><span style={{ fontWeight: "bold", paddingRight:"2px"}}>DEV</span>ANURAG</a>
        <form style={{margin:"auto", width: "450px"}}>      
             <input type="text" className="form-control" id="globalsearch" placeholder="Search"/>
        </form>
        <p style={{paddingRight:"3px"}}><BsPeople/></p><p style={{paddingRight:"3px"}}>NetSuite Developer: Administrator</p>
      </nav>

      <nav
        className="navbar navbar-expand-lg navbar-light menu"
        style={{ backgroundColor: "rgb(96 119 153)" ,paddingLeft: "14px"}}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
               <FaHome/>
              </Link>
              </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/home" element={<Home />} />
      </Routes>

      <footer className="bg-light text-black text-left p-3">
        &copy; {new Date().getFullYear()} Devanurag.com, This website is designed & developed by Anurag Kumar. Freelancer NetSuite
        Developer. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
