const express = require('express');
const router = express.Router();

const Planet = require('../src/models/planets');

// Rotas



module.exports = app => app.use('/v1', router);