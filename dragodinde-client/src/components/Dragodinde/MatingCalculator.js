import React, { useState } from 'react';
import { calculateMating } from '../api';

const MatingCalculator = ({ dragodindes }) => {
  const [parents, setParents] = useState({ parent1: '', parent2: '' });
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await calculateMating(parents);
      setResult(data);
    } catch (error) {
      alert('Failed to calculate mating results.');
    }
  };

  return (
    <div>
      <h1>Mating Calculator</h1>
      <form onSubmit={handleSubmit}>
        <select
          onChange={(e) => setParents({ ...parents, parent1: e.target.value })}
        >
          <option value="">Select Parent 1</option>
          {dragodindes.map((d) => (
            <option key={d._id} value={d._id}>
              {d.name} ({d.type})
            </option>
          ))}
        </select>
        <select
          onChange={(e) => setParents({ ...parents, parent2: e.target.value })}
        >
          <option value="">Select Parent 2</option>
          {dragodindes.map((d) => (
            <option key={d._id} value={d._id}>
              {d.name} ({d.type})
            </option>
          ))}
        </select>
        <button type="submit">Calculate</button>
      </form>

      {result && (
        <div>
          <h2>Results:</h2>
          <p>Offspring Type: {result.offspringType}</p>
        </div>
      )}
    </div>
  );
};

export default MatingCalculator;
