const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => res.send('Hello again!'))

app.listen(port)

console.log(`[app]: http://localhost:${port} `)

/*
node comes with an http module, that makes it easy to create a server

within server, use command node src

install as dev dependency
npm i nodemon -D

then add a scripts section to package.json
 "scripts": {
    "start": "nodemon src/"
  }
  then use npm run start

npm i typescript ts-node -D

const one = 1
const two = 2
console.log(`1 + 2 = ${one + two}`)

*/
