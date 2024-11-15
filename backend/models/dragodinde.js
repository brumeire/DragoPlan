const mongoose = require('mongoose');

const DragodindeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  parent1: { type: mongoose.Schema.Types.ObjectId, ref: 'Dragodinde' },
  parent2: { type: mongoose.Schema.Types.ObjectId, ref: 'Dragodinde' },
});

module.exports = mongoose.model('Dragodinde', DragodindeSchema);
