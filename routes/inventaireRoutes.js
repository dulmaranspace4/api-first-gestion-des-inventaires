const express = require('express');
const router = express.Router();
const Inventaire = require('../models/Inventaire');

// Obtenir tous les produits
router.get('/', async (req, res) => {
    try {
        const produits = await Inventaire.find();
        res.json(produits);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Ajouter un produit
router.post('/', async (req, res) => {
    const nouveauProduit = new Inventaire(req.body);
    try {
        const produitEnregiste = await nouveauProduit.save();
        res.status(201).json(produitEnregiste);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
