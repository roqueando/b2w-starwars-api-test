const mongoose = require('../database');

const PlanetSchema = new mongoose.Schema({

	name: {
		type: String,
		required: true
	},
	climate: {
		type: String,
		required: true
	},
	terrain: {
		type: String,
		required: true
	},
	countFilms: {
		type: Number,
		required: false
	},
	createdAt: {
		type: Date,
		default: Date.now
	}

});

const Planet = mongoose.model('Planet', PlanetSchema);

module.exports = Planet;