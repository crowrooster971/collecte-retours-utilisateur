const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecté à la base de données MongoDB'))
  .catch(err => console.error('Erreur de connexion à MongoDB:', err));

// Routes
app.get('/', (req, res) => {
  res.send('Bienvenue dans l\'application de collecte des retours utilisateur!');
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d\'exécution sur le port ${PORT}`);
});
