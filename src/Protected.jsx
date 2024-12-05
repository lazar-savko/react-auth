import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import './index.css';

const Protected = () => {
  const { token } = useContext(AuthContext);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProtectedContent = async () => {
      try {
        const response = await fetch('https://seal-app-hreq9.ondigitalocean.app/protected', {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        const data = await response.json();
        setMessage(data.msg);
      } catch (error) {
        setMessage('You are not allowed to view this content.');
      }
    };

    fetchProtectedContent();
  }, [token]);

  return (
    <div className="page">
      <h2>Protected Content</h2>
      <h3>Yaay!</h3>
      <h4>You can read this content because you're logged in!</h4>
      <h1>🤭</h1>
      <h3>Protected backend content: {message}</h3>
    </div>
  );
};

export default Protected;

