# API Star Wars - Test B2W

## Adicionar Planeta

`POST /v1/planet/create` 

Ex.:

Request Body

```json
{
	"name": "Naboo",
	"climate": "temperate",
	"terrain": "grassy hills, swamps, forests, mountains"
}
```

Response

```json
{
	"result": {
		"planet": {
			"_id": "5cae96555713b3545ad6bd60",
			"name": "Naboo",
			"climate": "temperate",
			"terrain": "grassy hills, swamps, forests, mountains",
			"countFilms": 4,
			"createdAt": "2019-04-11T01:20:22.001Z",
			"__v": 0
		}
	}
}
```

## Buscar planeta por nome

`GET /planet/find/name/Tatooine` 

Ex.:

Response:

```json
{
	"result": {
		"planet": {
			"_id": "5cae9359debaba4dce3dce5a",
			"name": "Tatooine",
			"climate": "Arid",
			"terrain": "Dessert",
			"countFilms": 5,
			"createdAt": "2019-04-11T01:07:37.499Z",
			"__v": 0
		}
	}
}
```

## Buscar planeta por id

`GET /planet/find/id/5cae96555713b3545ad6bd60`

Ex..:

Response:

```json
{
	"result": {
		"planet": {
			"_id": "5cae96555713b3545ad6bd60",
			"name": "Naboo",
			"climate": "temperate",
			"terrain": "grassy hills, swamps, forests, mountains",
			"countFilms": 4,
			"createdAt": "2019-04-11T01:20:22.001Z",
			"__v": 0
		}
	}
}
```

## Remover planeta

`DELETE /planet/delete/5cae96555713b3545ad6bd60`

Ex.:

Response:

```json
{
	"result": "Planeta deletado com sucesso."
}
```

## Listar todos os planetas

`GET /planet/list`

Ex.:

Response:

```json
{
	"result": {
		"planets": [
			{
				"_id": "5cae9d5a5e0bf0617436ab41",
				"name": "Naboo",
				"climate": "temperate",
				"terrain": "grassy hills, swamps, forests, mountains",
				"countFilms": 4,
				"createdAt": "2019-04-11T01:50:19.006Z",
				"__v": 0
			}
		]
	}
}
```

