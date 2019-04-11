const express = require('express');
const router = express.Router();

const PlanetController = require('./controllers/PlanetController');
// Routes

router.post('/planet/create', PlanetController.addPlanet);
router.get('/planet/find/name/:name', PlanetController.findPlanetByName);
router.get('/planet/find/id/:id', PlanetController.findByPlanetById);
router.delete('/planet/delete/:id', PlanetController.removePlanet);

module.exports = app => app.use('/v1', router);