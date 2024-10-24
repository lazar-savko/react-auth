import React from 'react';
import './index.css';

const Protected = () => {
  return (
    <div className="page">
      <h2>Protected Content</h2>
      <h3>Yaay!</h3>
      <h4>You can read this content because you're logged in!</h4>
      <h1>🤭</h1>
    </div>
  );
};

export default Protected;
