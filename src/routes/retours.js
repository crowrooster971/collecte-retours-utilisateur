const express = require('express');
const Retour = require('../models/Retour');
const router = express.Router();

// Créer un retour
router.post('/', async (req, res) => {
  const retour = new Retour(req.body);
  try {
    await retour.save();
    res.status(201).send(retour);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Obtenir tous les retours
router.get('/', async (req, res) => {
  try {
    const retours = await Retour.find();
    res.status(200).send(retours);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
