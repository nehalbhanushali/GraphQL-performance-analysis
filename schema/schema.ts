import { readFileSync } from 'fs';
import { join } from 'path';
import { makeExecutableSchema } from '@graphql-tools/schema';


// DATA
/* Apollo Server is what we call data-source agnostic 
 * — this means that you can fetch data from any source you like (SQL & NoSQL databases, REST APIs, other GraphQL APIs, or even just static JSON)
 */

const groups = [
  {
    id: 21,
    name: 'Administrators',
    description: 'admin role',
    users: [11]
  },
  {
    id: 22,
    name: 'Policy Makers',
    description: 'can make policies',
    users: [11, 12]
  },
]

const users = [
    {
      id: 11,
      name: 'Nehal Bhanushali',
      emailID: 'nrb1301@gmail.com',
      groups: groups
    },
    {
      id: 12,
      name: 'Vishal Gori',
      emailID: 'vg1112@gmail.com',
      groups: [groups[1]]
    },
]



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
        groups: async () => {
          await new Promise((res) => setTimeout(res, Math.random() * 1000));
          return groups;
        },
      }
    },
  });
};