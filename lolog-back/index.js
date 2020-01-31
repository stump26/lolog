import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

let PLAYGROUND_FLAG;
if (process.env.NODE_ENV === "production") {
  PLAYGROUND_FLAG = false;
} else if (process.env.NODE_ENV === "development") {
  PLAYGROUND_FLAG = "/";
}

console.log("TCL: PLAYGROUND_FLAG", PLAYGROUND_FLAG);
const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
  PLAYGROUND_FLAG
});

server.start(() => {
  console.log("Graphql Server Running at http://localhost:4000");
});
