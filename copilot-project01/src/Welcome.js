import React from 'react';
import './Welcome.css'; // Import CSS for background styling

function Welcome({ username }) {
  return (
    <div className="welcome-container">
      <h2>Welcome, {username}</h2>
      <p>You are logged in!</p>
    </div>
  );
}

export default Welcome;
