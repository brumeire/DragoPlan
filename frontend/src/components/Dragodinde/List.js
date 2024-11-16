import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DragodindeList = () => {
  const [dragodindes, setDragodindes] = useState([]);

  useEffect(() => {
    const fetchDragodindes = async () => {
      try {
        const response = await axios.get('https://dragoplan.onrender.com/dragodindes'); // Backend endpoint for dragodindes
        setDragodindes(response.data);
      } catch (err) {
        console.error('Error fetching dragodindes:', err);
      }
    };
    fetchDragodindes();
  }, []);

  return (
    <div>
      <h2>Your Dragodindes</h2>
      <ul>
        {dragodindes.map((dragodinde) => (
          <li key={dragodinde._id}>
            {dragodinde.name} - {dragodinde.breed} {/* Add more details as necessary */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DragodindeList;
