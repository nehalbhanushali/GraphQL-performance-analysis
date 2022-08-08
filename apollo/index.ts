import { ApolloServer, gql } from 'apollo-server';
import { buildSchema } from '../schema/schema';
// Note: Optional chaining (?.) is currently not supported in Node.js version 13 and below
import { createApolloProfilerPlugin } from '@econify/graphql-request-profiler';
import depthLimit from 'graphql-depth-limit';

/*
import {
  GraphQLInputInt,
  GraphQLInputFloat,
} from 'graphql-input-number';
*/

// SERVER INSTANCE - The ApolloServer constructor requires two parameters: schema definition and set of resolvers.
const server = new ApolloServer({
  schema: buildSchema(),
  validationRules: [ depthLimit(1) ],
  plugins: [createApolloProfilerPlugin()],
});

// Authentication & Authorization - Is the user logged in, who are they, what are their permissions.

/*
const server = new ApolloServer({
 typeDefs,
 resolvers,
 csrfPrevention: true,
 cache: 'bounded',
 context: ({ req }) => {
    // get the user token from the headers
    const token = req.headers.authorization || '';
   
    // try to retrieve a user with the token
    const user = getUser(token);
   
    // optionally block the user
    // we could also check user roles/permissions here
    if (!user) throw new AuthenticationError('you must be logged in');
   
    // add the user to the context
    return { user };
   },
});
*/

// ./dist/cli.js --schema ../GraphQL-performance-analysis/schema/operation.graphql --endpoint=http://localhost:4000/graphql


// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});





