import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <p className="text-2xl font-bold text-gradient monbile-text">Resume Genius AI</p>
      </Link>
      <Link to="/upload" className='primary-button w-fit '>
        <span className='px-2'>Upload Resume</span>
      </Link>
    </nav>
  );
};

export default Navbar;
