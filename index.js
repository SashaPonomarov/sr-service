const fastify = require('fastify')({
	logger: {
		prettyPrint: true,
		timestamp: false,
		base: null
	}
})

var data = {};

fastify.all('/*', function (request, reply) {
	data['code'] = request.raw.url.replace('/', '')
	data['ip'] = request.raw.ip
	data['userAgent'] = request.headers['user-agent']
  console.log(data)

  reply.redirect(301, 'http://www.okami.tech')
})

fastify.listen(3000, '0.0.0.0')