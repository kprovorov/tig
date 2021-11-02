const express = require('express')
const {Client} = require('pg')
const faker = require('faker');
const app = express()
const port = 8080

app.get('/', async (req, res) => {

  const client = new Client({
    user: 'admin',
    host: '127.0.0.1',
    database: 'postgres',
    password: 'admin',
    port: 5432,
  })
  await client.connect()
  const user = await client.query('INSERT INTO users (name, age, email) VALUES ($1, $2, $3) RETURNING *', [
    faker.name.findName(),
    faker.datatype.number(70),
    faker.internet.email()
  ])
  await client.end()

  res.send(user.rows[0])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
