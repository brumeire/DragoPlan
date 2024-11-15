import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, setUser }) => {
  const handleLogout = () => {
    // You can clear the user's session or token here
    setUser(null);
    // Optionally, also clear token or session from localStorage or cookies
    localStorage.removeItem('token');
  };

  return (
    <nav className="Navbar">
      <Link to="/">Home</Link>
      {user ? (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
