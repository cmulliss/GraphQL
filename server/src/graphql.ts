import { GraphQLObjectType, GraphQLSchema } from 'graphql'

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    hello: {},
  },
})

const mutation = new GraphQLObjectType({
  name: 'Mutation',
})

export const schema = new GraphQLSchema({ query, mutation })

/*
es6 syntax allows us to change this to above
export const schema = new GraphQLSchema({ query: query, mutation: mutation })
*/
