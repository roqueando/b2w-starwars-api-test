const express = require('express');
const router = express.Router();

const PlanetController = require('./controllers/PlanetController');
// Routes

router.post('/planet/create', PlanetController.addPlanet);

module.exports = app => app.use('/v1', router);