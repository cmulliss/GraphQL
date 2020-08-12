import express from 'express'
import bodyParser from 'body-parser'

import { listings } from './listings'

const app = express()
const port = 9000
app.use(bodyParser.json())

const one = 1
const two = 2

app.get('/', (_req, res) => res.send(`1 + 2 = ${one + two}`))

// listings route, 'get' data
app.get('/listings', (_req, res) => {
  res.send(listings)
})
// delete listings route
app.post('/delete-listing', (req, res) => {
    const id: string = req.body.id;
  
    for (let i = 0; i < listings.length; i++) {
      if (listings[i].id === id) {
        return res.send(listings.splice(i, 1));
      }
    }
  }
  
app.listen(port)

console.log(`[app]: http://localhost:${port} `)

/* _req as wont be using it, then callback
need body parser middleware untility lib

npm install body-parser

Then install its type declaration file as a development dependency.

server $: npm install -D @types/body-parser
We'll then import the bodyParser module in our index.ts file.

server/src/index.ts
import bodyParser from "body-parser";

To use middleware in our Express server, we'll use the .use() function in our app server instance where we can mount specific middleware functionality. In our middleware function, we'll pass in bodyParser.json() to help parse incoming requests as JSON and expose the resulting object on req.body.

server/src/index.ts
app.use(bodyParser.json());

*/
