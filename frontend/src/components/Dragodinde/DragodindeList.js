import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DragodindeList = ({ user }) => {
  const [dragodindes, setDragodindes] = useState([]);

  useEffect(() => {
    if (user) {
      const fetchDragodindes = async () => {
        try {
          const response = await axios.get('https://dragoplan.onrender.com/dragodindes', {
            params: { ownerId: user.id },
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          });
          setDragodindes(response.data);
        } catch (err) {
          console.error('Error fetching dragodindes:', err);
        }
      };
      fetchDragodindes();
    }
  }, [user]);

  return (
    <div>
      <h2>Your Dragodindes</h2>
      <ul>
        {dragodindes.length === 0 ? (
          <li>No dragodindes found</li>
        ) : (
          dragodindes.map((dragodinde) => (
            <li key={dragodinde._id}>
              {dragodinde.name} - {dragodinde.breed}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default DragodindeList;
