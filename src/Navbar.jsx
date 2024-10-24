import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import './index.css'; 

const Navbar = () => {
  const { token, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home</Link>
        {token && <Link to="/protected">Protected</Link>}
        {token && <Link to="/admin">Admin</Link>}
      </div>
      {token ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
