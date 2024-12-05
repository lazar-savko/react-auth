import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import './index.css';

const AdminOnly = () => {
  const { token } = useContext(AuthContext);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchAdminContent = async () => {
      try {
        const response = await fetch('https://seal-app-hreq9.ondigitalocean.app/adminonly', {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        const data = await response.json();
        setMessage(data.msg);
      } catch (error) {
        setMessage('You are not allowed to view this content.');
      }
    };

    fetchAdminContent();
  }, [token]);

  return (
    <div className="page">
      <h2>Admin-Only Content</h2>
      <p>{message}</p>
    </div>
  );
};

export default AdminOnly;
