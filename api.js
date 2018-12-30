// Require the framework and instantiate it
const api = require('lambda-api')()

// Add CORS headers
api.options('/*', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  res.status(200).send({})
})

// Catch-all
api.get('/*', async (req, res) => {
  return { message: 'Hello world!' }
})

module.exports = api
