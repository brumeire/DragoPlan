const express = require('express');
const router = express.Router();

// Mating Calculator - Determine the offspring based on ancestry
router.post('/', (req, res) => {
  const { dragodinde1, dragodinde2 } = req.body;

  // Basic example logic: offspring inherit the best traits of both parents
  const offspring = {
    name: `Offspring of ${dragodinde1.name} and ${dragodinde2.name}`,
    breed: dragodinde1.breed === dragodinde2.breed ? dragodinde1.breed : 'Mixed Breed',
    ancestry: [...dragodinde1.ancestry, ...dragodinde2.ancestry], // Combine ancestries
  };

  res.json(offspring); // Return the generated offspring details
});

module.exports = router;
