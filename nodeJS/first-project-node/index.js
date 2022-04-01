const express = require('express')
const uuid = require('uuid')

const port = 3000
const app = express()
app.use(express.json())

/*
- Query params => ?nome=valor&idade=valor  => req.query (objeto) Filtros de busca
- Route params => /users/:id (users/1) => req.params BUSCAR, DELETAR, ATUALIZAR
- Request Body => { "name": "Marcelo", "email": "mlluiz@gmail.com" } => req.body (objeto)

- GET: Buscar uma informação do back-end
- POST: Criar uma informação no back-end
- PUT / PATCH: Atualizar uma informação no back-end
- DELETE: Deletar uma informação no back-end
*/

const users = []

app.get('/users', (req, res) => {
  return res.json(users)
})

app.get('/users/:id', (req, res) => {
  //const identificador = req.params.id
  const { id } = req.params
  return res.json({ id })
})

app.post('/users', (req, res) => {
  const { name, email } = req.body
  let user = {
    id: users.length + 1,
    name,
    email,
  }
  users.push(user)

  return res.status(201).send(user)
})

app.put('/users/:id', (req, res) => {
  const { id } = req.params
  const { name, email } = req.body
  const user = users.find(user => user.id === Number(id))
  if (!user) {
    return res.status(400).send({ error: 'User not found' })
  }
  user.name = name
  user.email = email
  return res.json(user)
})

app.listen(port, () => console.log(`🚀 Servidor rodando na porta: ${port}!`))
