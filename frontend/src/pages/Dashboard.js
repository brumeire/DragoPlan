import React from 'react';

const Dashboard = ({ user }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome back, {user.email}!</p>
      {/* You can add more personalized information for the user here */}
    </div>
  );
};

export default Dashboard;
