import { readFileSync } from 'fs';
import { join } from 'path';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { users, groups } from './data';

export const buildSchema = () => {
  return makeExecutableSchema({
    typeDefs: readFileSync(join(__dirname, 'schema.graphql')).toString(),
    // RESOLVERS - define where the data comes from and the technique for fetching the types defined in the schema.
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