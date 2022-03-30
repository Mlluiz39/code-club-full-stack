const { request } = require('express')
const express = require('express')

const port = 3000
const app = express()
app.use(express.json())

/*
- Query params => ?nome=valor&idade=valor  => req.query (objeto) Filtros de busca
- Route params => /users/:id (users/1) => req.params BUSCAR, DELETAR, ATUALIZAR
- Request Body => { "name": "Marcelo", "email": "mlluiz@gmail.com" } => req.body (objeto)
*/

app.get('/users', (req, res) => {
  const name = req.query.name // podemos usar destructuring para pegar o nome e a idade
  const age = req.query.age
  const { nome, idade } = req.query
  return res.json({ name, age, nome, idade })
})

app.get('/users/:id', (req, res) => {
  const identificador = req.params.id
  const { id } = req.params
  return res.json({ id, identificador })
})

app.get('/user', (req, res) => {
  const { name, age } = req.body
  console.log(req.body)

  return res.json({ name, age })
})

app.listen(port, () => console.log(`🚀 Servidor rodando na porta: ${port}!`))
