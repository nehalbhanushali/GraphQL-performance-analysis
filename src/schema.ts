import { readFileSync } from 'fs';
import { join } from 'path';
import { makeExecutableSchema } from '@graphql-tools/schema';


// DATA
/* Apollo Server is what we call data-source agnostic 
 * — this means that you can fetch data from any source you like (SQL & NoSQL databases, REST APIs, other GraphQL APIs, or even just static JSON)
 */
const users = [
    {
      id: 1234567,
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

export const buildSchema = () => {
  return makeExecutableSchema({
    typeDefs: readFileSync(join(__dirname, 'schema.graphql')).toString(),
    // RESOLVERS - define where the data comes from and the technique for fetching the types defined in the schema. This resolver retrieves users from the "users" array above.
    resolvers: {
      Query: {
        users: async () => {
          await new Promise((res) => setTimeout(res, Math.random() * 1000));
          return users;
        },
      }
    },
  });
};