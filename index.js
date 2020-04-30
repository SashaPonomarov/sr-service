const fastify = require('fastify')({
	logger: {
		prettyPrint: true,
		timestamp: false,
		base: null
	}
})

var data = {};

fastify.all('/*', function (request, reply) {
fastify.register(require('fastify-cookie'))

fastify.all('/:code', function (request, reply) {
	const data = {
		code: request.params.code,
		ip: request.ip,
		userAgent: request.headers['user-agent'],
		token: request.cookies.activeskill_user_token
	}
	console.log(data)
	
	if (!data.token) {
		reply.setCookie('activeskill_user_token', 'testtoken', {
			domain: 'localhost'
		})
	}

  reply.redirect(301, 'http://www.okami.tech')
})

fastify.listen(3000, '0.0.0.0')
