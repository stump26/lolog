import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import { API_KEY } from './apikey.json';

console.log(API_KEY);

const server = new GraphQLServer({
    typeDefs:"graphql/schema.graphql",
    resolvers
})

server.start(()=>{
    console.log("Graphql Server Running at http://localhost:4000");
})