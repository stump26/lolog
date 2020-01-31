import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { ApolloServer } from "apollo-server-azure-functions";

import schema from "./graphql/graphql.config";

// const httpTrigger: AzureFunction = async function(
//   context: Context,
//   req: HttpRequest
// ): Promise<void> {
//   if (req.method === "POST") {

//   }
// };

// export default httpTrigger;

const server = new ApolloServer({ schema });
export default server.createHandler();
