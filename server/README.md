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
import bodyParser from "body-parser";
