const { ApolloServer, gql } = require('apollo-server');

// SCHEMA - defines the structure of our API
const typeDefs = gql`

  # This "User" type defines the queryable fields: 'name' and 'emailID'.
  type User {
    id: ID!
    name: String
    emailID: String
    roles: [String!] # (a non-null array of non-null Sring values)
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "users" query returns an array of zero or more Users (defined above).
  type Query {
    users: [User]
  }
`;

// DATA
/* Apollo Server is what we call data-source agnostic 
 * — this means that you can fetch data from any source you like (SQL & NoSQL databases, REST APIs, other GraphQL APIs, or even just static JSON)
 */
const users = [
    {
      id: 12345,
      name: 'Nehal Bhanushali',
      emailID: 'nrb1301@gmail.com',
      roles: ['user', 'admin']
    },
    {
      id: 23456,
      name: 'Vishal Gori',
      emailID: 'vg1112@gmail.com',
      roles: ['user']
    },
  ];

// RESOLVERS - define where the data comes from and the technique for fetching the types defined in the schema. This resolver retrieves users from the "users" array above.
const resolvers = {
    Query: {
      users: () => users,
       /*
       users: (parent, args, context) => {
        if (!context.user || !context.user.roles.includes('admin')) return null;
        return context.models.User.getAll();
       }
       */
    },
  };

// SERVER INSTANCE - The ApolloServer constructor requires two parameters: schema definition and set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

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
  console.log(`🚀  Server ready at ${url}`);
});





