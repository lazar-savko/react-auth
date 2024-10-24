import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './AuthContext';
import Login from './Login';
import Protected from './Protected';
import Home from './Home';
import AdminOnly from './AdminOnly';
import Navbar from './Navbar';
import './index.css'; 

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/protected" element={<PrivateRoute><Protected /></PrivateRoute>} />
            <Route path="/admin" element={<PrivateRoute><AdminOnly /></PrivateRoute>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

const PrivateRoute = ({ children }) => {
  const { token } = React.useContext(AuthContext);
  return token ? children : <Navigate to="/login" />;
};

export default App;
