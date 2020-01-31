import * as path from "path";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeTypes, mergeResolvers } from "merge-graphql-schemas";

const resolversArray = fileLoader(path.join(__dirname, "./resolver"));
const resolvers = mergeResolvers(resolversArray);

const typesArray = fileLoader(path.join(__dirname, "./typedefs"));
const typeDefs = mergeTypes(typesArray, {
  all: true
});

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
