const mongoose = require('mongoose');

const retourSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Retour', retourSchema);
