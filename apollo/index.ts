import { ApolloServer, gql } from 'apollo-server';
import { buildSchema } from '../src/schema';
// Note: Optional chaining (?.) is currently not supported in Node.js version 13 and below
import { createApolloProfilerPlugin } from '@econify/graphql-request-profiler';

// SERVER INSTANCE - The ApolloServer constructor requires two parameters: schema definition and set of resolvers.
const server = new ApolloServer({
  schema: buildSchema(),
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


// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  // TODO: nodemon not working
  console.log(`🚀  Server ready at ${url}`);
});





