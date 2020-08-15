# GraphQL

- node comes with an http module, that makes it easy to create a server

- within server, use command node src

install as dev dependency
npm i nodemon -D

then add a scripts section to package.json
"scripts": {
"start": "nodemon src/"
}
then use npm run start

npm i typescript ts-node -D

create tsconfig.json

Since Express and Node aren't TypeScript libraries, we'll need to install type definitions from TypeScript declaration files for the express and node packages. We'll install these type definitions as development dependencies.

@types/ refers to the TypeScript declaration file packages that come from the DefinitelyTyped Github Repository.

npm install -D @types/node @types/express

In our index.ts file, we can begin to utilize ES6 import to import the express package. Node doesn't currently support the capability to use the import statement to import modules. This is a great advantage of TypeScript - the capability to use and access ES6 (and newer) features that might not be natively supported in Node (or older browsers).

const one = 1
const two = 2
console.log(`1 + 2 = ${one + two}`)

The headline feature of TypeScript is static typing. Instead of having our variables be inferred as numbers, we can statically annotate the type of our variables as number with the syntax : number.

When we run the start script in our command line, our project will run despite us doing any other changes! In our console logs, we can see the message ts-node src/index.ts which tells us the ts-node package is now being used to run the TypeScript app directly from our terminal.

This is in thanks to nodemon invoking ts-node whenever a .ts file has been changed. Any time there's a change in our TypeScript code, nodemon will re-run our server and execute ts-node. ts-node under the hood does a bunch of checks to verify all our TypeScript code is good by attempting to compile our TypeScript code to valid JavaScript. If there's ever a TypeScript error, nodemon will crash.

tsc takes an option labeled -p which is shorthand for --project that allows us to compile the TypeScript code in a project that contains a tsconfig.json file. The -p option requires an argument of the project directory. We'll use the tsc command in the build script of our application to compile our TypeScript project.

With deployment, we'll need to build our application to obtain valid JavaScript code and then place the compiled build/ folder into any deployment process that we would want. We'll hardly ever find the need to dive into the build/ folder to see the generated compiled JavaScript code.

29.43

## ESlint

npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

## CREATING GET AND POST EXPRESS ROUTES

With our mock listings array defined, we'll attempt to have our Express server give us the capability to GET and POST changes to this mock data array.

Like we've seen for the index route (/) in the src/index.ts file, Express gives us the capability to creates routes which refer to how different endpoints respond to client requests. We're going to create two new separate routes:

A /listings route with which we can retrieve the listings collection.
A /delete-listing route with which we can delete a specified listing.

\_req as wont be using it, then callback
need body parser middleware untility lib

npm install body-parser

Then install its type declaration file as a development dependency.

server \$: npm install -D @types/body-parser
We'll then import the bodyParser module in our index.ts file.

server/src/index.ts
import bodyParser from "body-parser"

## Why GraphQL

Is a query language for APIs

Typed language, so need to be explicit

Intuitive, Performant, Typed

All data served in single endpoint

Is a spec, not a direct implementation

## Apollo Server

npm install apollo-server-express

then as a dependency of above:
npm install graphql

## USING THE GRAPHQL SCHEMA LANGUAGE

Apollo Server conventionally allows us to define a GraphQL schema by setting up two different values.

typeDefs - string that represents the GraphQL schema.
resolvers - map of functions that implement the schema.
We'll create these in separate files located within a src/graphql folder. We'll also create an index.ts file in the src/grapqhl folder to gather the typeDefs and resolvers map and export them explicitly from the graphql/ folder.

server/
src/
graphql/
index.ts
resolvers.ts
typeDefs.ts
// ...

import { gql } from "apollo-server-express";

The gql tag will allow us to write GraphQL in our code by having strings be parsed as a GraphQL Abstract Syntax Tree. Let's see this in action before we discuss how the gql tag works. We'll export and create a const variable named typeDefs that has the gql tag wrapped around a template literal string.

### GQL

The gql tag helps parse the string we've created into a GraphQL Abstract Syntax tree and Apollo Server requires us to use it to wrap our schema.

For clarification - gql is a function that takes a string as an argument. The string argument has to be constructed with template literals. You might be wondering why this function appears a little strange since its use involves the placement of a template string beside the gql reference. This is an ES6 feature known as "tagged template literals" which isn't commonly used but allows for the capability to parse strings with a preprocessor. The main takeaway here is that gql is a tag (i.e. function) where the argument is derived from the template literal applied alongside it. It takes the string and returns a GraphQL Tree.

By using the gql tag, it helps us manipulate the GraphQL document by making it easier to add/remove fields and perform more complicated functionality like merging queries. This is most apparent when we install and use an accompanying editor extension like the VSCode's Apollo GraphQL Extension. When installed, we'll get appropriate syntax highlighting for all our GraphQL documents created with the gql tag!
