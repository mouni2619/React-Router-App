import React, { useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import All from './All';
import FullStackDevelopment from './FullStackDevelopment';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';
import Career from './Career';
import { FaBars } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Navbar = () => {
    // State to track active navbar option and collapse state
    const [activeOption, setActiveOption] = useState(null);
    const [collapse, setCollapse] = useState(false);
    const location = useLocation(); // Hook to get current location

    // Function to toggle navbar collapse
    const navbarToggle = () => {
        setCollapse(!collapse);
    };

    // Function to handle click on navbar option
    const handleOptionClick = (option) => {
        setActiveOption(option);
    };

    return (
        <header>
            {/* Navbar */}
            <nav className="navbar navbar-expand-md navbar-light bg-light navbar-shadow navbarheader">
                <div className="container">
                    <img style={{height:"40px" , width:"40px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSitbow8t_OtGkuCqebxa9b0qKe9Jt24DgawWiqsroKSQ&s" alt="logo"/>
                    {/* Navbar toggle button */}
                    <button className="navbar-toggler" type="button" onClick={navbarToggle}>
                        <FaBars />
                    </button>
                    {/* Navbar content */}
                    <div className={`collapse navbar-collapse justify-content-center ${collapse ? 'show' : ''}`}>
                        {/* Navbar items */}
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            {/* Navbar option: ALL */}
                            <li className={`nav-item ${activeOption === 'all' || location.pathname === '/' ? 'active' : ''}`} onClick={() => handleOptionClick('all')}>
                                <Link to={'/'} className="nav-link">ALL</Link>
                            </li>
                            {/* Navbar option: FULL STACK DEVELOPMENT */}
                            <li className={`nav-item ${activeOption === 'full-stack-development' || location.pathname === '/full-stack-development' ? 'active' : ''}`} onClick={() => handleOptionClick('full-stack-development')}>
                                <Link to={'/full-stack-development'} className="nav-link">FULL STACK DEVELOPMENT</Link>
                            </li>
                            {/* Navbar option: DATA SCIENCE */}
                            <li className={`nav-item ${activeOption === 'data-science' || location.pathname === '/data-science' ? 'active' : ''}`} onClick={() => handleOptionClick('data-science')}>
                                <Link to={'/data-science'} className="nav-link">DATA SCIENCE</Link>
                            </li>
                            {/* Navbar option: CYBER SECURITY */}
                            <li className={`nav-item ${activeOption === 'cyber-security' || location.pathname === '/cyber-security' ? 'active' : ''}`} onClick={() => handleOptionClick('cyber-security')}>
                                <Link to={'/cyber-security'} className="nav-link">CYBER SECURITY</Link>
                            </li>
                            {/* Navbar option: CAREER */}
                            <li className={`nav-item ${activeOption === 'career' || location.pathname === '/career' ? 'active' : ''}`} onClick={() => handleOptionClick('career')}>
                                <Link to={'/career'} className="nav-link">CAREER</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Routes */}
            <Routes>
                <Route path="/" element={<All />} />
                <Route path="/full-stack-development" element={<FullStackDevelopment />} />
                <Route path="/data-science" element={<DataScience />} />
                <Route path="/cyber-security" element={<CyberSecurity />} />
                <Route path="/career" element={<Career />} />
            </Routes>
        </header>
    );
};

export default Navbar;
