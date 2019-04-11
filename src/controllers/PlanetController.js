const Planet = require('../models/planets');
const axios = require('axios');

/**
 * getPlanets
 * @param  {String} url     url da api SWAPI
 * @param  {Array} planets array que irá guardar todos os planetas
 * @return {Array}         Array de planetas
 */
const getPlanets = async (url, planets) => {
	let response = await axios.get(url);
	const returnedPlanets = planets.concat(response.data.results);
	if(response.data.next !== null) {
		return getPlanets(response.data.next, returnedPlanets);
	} else {
		return returnedPlanets;
	}
	
}


module.exports = {

	/**
	 * Add Planet
	 * @description Adiciona um planeta novo com seu nome, clima, terreno e quantidade de filmes
	 *              em que aparece.
	 */
	async addPlanet(req, res) {

		try {

			const { name, climate, terrain } = req.body;

			const planets = await getPlanets('https://swapi.co/api/planets', []);
			var films = 0;
			planets.forEach(item => {
				if(item.name === name) {
					films = item.films.length;
				}
			});

			const planet = await Planet.create({
				name,
				climate,
				terrain,
				countFilms: films
			});

			if(!planet) {
				return res.status(400).send({ error: { description: "Não foi possível salvar o planeta" } });
			}

			return res.send({ result: { planet } });
			
		} catch (err) {
			return res.status(400).send({ error: { description: err.message } });
		}
	},

	async findPlanetByName(req, res) {
		try {

			const { name } = req.params;

			const planet = await Planet.findOne({ name });

			if(!planet) {
				return res.status(404).send({ error: { description: "Não foi possível encontrar o planeta" } });
			}

			return res.send({ result: { planet } });

		} catch (err) {
			return res.status(400).send({ error: { description: err.message } })
		}
	},

	async findByPlanetById(req, res) {
		try {

			const { id } = req.params;

			const planet = await Planet.findById(id);

			if(!planet) {
				return res.status(404).send({ error: { description: "Não foi possível encontrar o planeta" } });
			}

			return res.send({ result: { planet } });

		} catch (err) {
			return res.status(400).send({ error: { description: err.message } })
		}
	},

	async removePlanet(req, res) {
		try {

			const { id } = req.params;

			await Planet.deleteOne({
				_id: id
			});

			return res.send({ result: "Planeta deletado com sucesso." });

		} catch (err) {
			return res.status(400).send({ error: { description: err.message } })
		}
	}

}