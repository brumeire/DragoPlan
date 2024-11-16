import React, { useState } from 'react';
import axios from 'axios';

const MatingCalculator = () => {
  const [dragodinde1, setDragodinde1] = useState('');
  const [dragodinde2, setDragodinde2] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = async () => {
    try {
      const response = await axios.post('https://dragoplan.onrender.com/mating', {
        dragodinde1,
        dragodinde2
      });
      setResult(response.data);
    } catch (err) {
      console.error('Error calculating mating:', err);
      setResult('An error occurred during mating calculation');
    }
  };

  return (
    <div>
      <h2>Mating Calculator</h2>
      <input
        type="text"
        placeholder="Dragodinde 1"
        value={dragodinde1}
        onChange={(e) => setDragodinde1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Dragodinde 2"
        value={dragodinde2}
        onChange={(e) => setDragodinde2(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate Mating</button>

      {result && <p>{result}</p>}
    </div>
  );
};

export default MatingCalculator;
