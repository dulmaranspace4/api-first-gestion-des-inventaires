const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/inventaires', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connecté à MongoDB')).catch(err => console.error(err));

// Routes API
app.use('/api/inventaires', require('./routes/inventaireRoutes'));

app.listen(PORT, () => {
    console.log(`Le serveur tourne sur le port ${PORT}`);
});
