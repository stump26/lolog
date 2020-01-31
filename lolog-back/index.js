import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

let PLAYGROUND_FLAG;
if (process.env.NODE_ENV === "production") {
  PLAYGROUND_FLAG = false;
} else if (process.env.NODE_ENV === "development") {
  PLAYGROUND_FLAG = {
    tabs: [
      {
        PLAYGROUND_ENDPOINT
      }
    ]
  };
}

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
  playground: PLAYGROUND_FLAG
});

server.start(() => {
  console.log("Graphql Server Running at http://localhost:4000");
});
