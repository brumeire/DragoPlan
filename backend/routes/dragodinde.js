const express = require('express');
const Dragodinde = require('../models/Dragodinde');
const router = express.Router();

// Get all dragodindes for a user
router.get('/', async (req, res) => {
  const { userId } = req.query;
  try {
    const dragodindes = await Dragodinde.find({ owner: userId }).populate('parent1 parent2');
    res.json(dragodindes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new dragodinde
router.post('/', async (req, res) => {
  const { name, type, owner, parent1, parent2 } = req.body;
  try {
    const dragodinde = await Dragodinde.create({ name, type, owner, parent1, parent2 });
    res.status(201).json(dragodinde);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;


router.post('/mating-calculate', async (req, res) => {
  const { parent1Id, parent2Id } = req.body;
  try {
    const parent1 = await Dragodinde.findById(parent1Id);
    const parent2 = await Dragodinde.findById(parent2Id);

    if (!parent1 || !parent2) return res.status(404).json({ error: 'Parents not found' });

    // Simple example logic for offspring type
    const offspringType = parent1.type === parent2.type ? parent1.type : 'Mixed';

    res.json({ offspringType, parent1, parent2 });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
