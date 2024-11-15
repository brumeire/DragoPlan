import React, { useState, useEffect } from 'react';
import { fetchDragodindes } from '../api';

const Dashboard = () => {
  const [dragodindes, setDragodindes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem('userId'); // Assume userId is stored after login
        const { data } = await fetchDragodindes(userId);
        setDragodindes(data);
      } catch (error) {
        alert('Failed to load dragodindes.');
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Your Dragodindes</h1>
      <ul>
        {dragodindes.map((d) => (
          <li key={d._id}>
            {d.name} - {d.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
