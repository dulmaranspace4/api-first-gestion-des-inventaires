const mongoose = require('mongoose');

const inventaireSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    quantite: { type: Number, required: true },
    description: { type: String, optional: true },
    dateAjout: { type: Date, default: Date.now }
});

const Inventaire = mongoose.model('Inventaire', inventaireSchema);
module.exports = Inventaire;
