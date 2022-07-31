"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildSchema = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const schema_1 = require("@graphql-tools/schema");
const buildSchema = () => {
    return (0, schema_1.makeExecutableSchema)({
        typeDefs: (0, fs_1.readFileSync)((0, path_1.join)(__dirname, 'schema.graphql')).toString(),
        resolvers: {
            Query: {
                sodas: async () => {
                    await new Promise((res) => setTimeout(res, Math.random() * 1000));
                    return [{}, {}, {}, {}, {}];
                },
            },
            DietCoke: {
                sugar: async () => {
                    await new Promise((res) => setTimeout(res, Math.random() * 1000));
                    return 0;
                },
            },
        },
    });
};
exports.buildSchema = buildSchema;
