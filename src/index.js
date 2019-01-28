


class SwapiService {

	_apiBase = 'https://swapi.co/api';


	async getResource(url) {

		const res = await fetch(`${this._apiBase}${url}`);
		// const body = await res.json();

		if(res.status !== 200) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`);
		}

		return await res.json();
	}

	async getAllPeople() {
		const res = await this.getResource(`/people/`);
		return res.results;
	}

	getPerson(id) {
		return this.getResource(`/people/${id}`);
	}

	async getAllPlanets() {
		const res = await this.getResource(`/planets/`);
		return res.results;
	}

	getPlanet(id) {
		return this.getResource(`/planets/${id}`);
	}

	async getAllStarships() {
		const res = await this.getResource(`/starships/`);
		return res.results;
	}

	getStarship(id) {
		return this.getResource(`/starships/${id}`);
	}
}

const swapi = new SwapiService();

swapi.getResource('/planets/').then(body => {
	console.log(body);
});


// getResource('https://swapi.co/api/people/1/')
// 	.then((body) => {
// 		console.log(body);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});


// fetch('https://swapi.co/api/people/1/')
// 	.then((res) => {
// 		console.log('Got response', res.status);
// 		return res.json();
// 	})
// 	.then((body) => {
// 		console.log(body);
// 	});