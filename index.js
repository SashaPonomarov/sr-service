const fastify = require('fastify')({
	logger: {
		prettyPrint: true,
		timestamp: false,
		base: null
	}
})

let code;
let ip;
let userAgent;


fastify.all('/*', function (request, reply) {
	code = request.raw.url.replace('/', '')
	ip = request.raw.ip
	userAgent = request.headers['user-agent']
  console.log('code: '+code)
  console.log('ip: '+ip)
	console.log('user agent: '+userAgent)

  reply.redirect(301, 'http://www.okami.tech')
})

fastify.listen(3000, '0.0.0.0')