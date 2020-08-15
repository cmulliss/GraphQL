import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs, resolvers } from './graphql'

const app = express()
const port = 9000
const server = new ApolloServer({ typeDefs, resolvers })

server.applyMiddleware({ app, path: '/api' })
app.listen(port)

console.log(`[app] : http://localhost:${port}`)

/*
to use the graphQL schema language
typedefs
resolvers

graphql folder and files

_req as wont be using it, then callback
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

// import apolloServer class, then create an instance, add schema to server

npm run start

then http://localhost:9000/api

will give you an interactive playground

try:

query {
  hello
}

mutation {
  hello
}

our express app is now fully prepared with apollo server

*/
