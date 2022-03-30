const { request } = require('express')
const express = require('express')
const app = express()
const port = 3000

/*
- Query params => ?nome=valor&idade=valor  => req.query (objeto) Filtros de busca
- Route params => /users/:id (users/1) => req.params BUSCAR, DELETAR, ATUALIZAR 
*/

app.get('/users', (request, response) => {
  const name = request.query.name // podemos usar destructuring para pegar o nome e a idade
  const age = request.query.age
  const { nome, idade } = request.query
  return response.json({ name, age, nome, idade })
})

app.listen(port, () => console.log(`🚀 Servidor rodando na porta: ${port}!`))
