import React from 'react';
import './index.css';

const Home = () => {
  return (
    <div className="page">
      <h2>Home Content</h2>
      <h4>When you aren't logged in, you can only see this page and the login page.</h4>
      <h1>🏠</h1>
      <div className='instructions'>
      <h4>You can log in as a regular user with the following information:</h4>
      <ul>
        <li>username: user1</li>
        <li>password: password1</li>
      </ul>
      <h4>You can log in as an admin with the following information:</h4>
      <ul>
        <li>username: admin</li>
        <li>password: adminpassword</li>
      </ul>
      </div>
      
    </div>
  );
};

export default Home;
