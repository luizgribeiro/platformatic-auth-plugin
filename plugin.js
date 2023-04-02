/// <reference path="./global.d.ts" />
'use strict'

/** @param {import('fastify').FastifyInstance} app */
module.exports = async function (app) {
	app.get('/', async ()=> {
		const movieTitles = await app.platformatic.entities.movie.find({fields: ['title']});
		return movieTitles;
	});

}
