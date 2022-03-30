const express = require('express')
const app = express()
const port = 3000

app.get('/users', (request, response) => response.send('Hello World!'))

app.listen(port, () => console.log(`🚀 Servidor rodando na porta: ${port}!`))
