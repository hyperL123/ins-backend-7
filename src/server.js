require("dotenv").config();
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema";
import { getUser } from "./users/users.utils";
import express from "express";
import logger from "morgan";
import { GraphQLUpload, graphqlUploadExpress } from "graphql-upload";

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // Using graphql-upload without CSRF prevention is very insecure.
    csrfPrevention: false,
    context: async ({ req }) => {
      const loggedInUser = await getUser(req.headers.token);
      return {
        loggedInUser,
      };
    },
    cache: "bounded",
  });

  await server.start();

  const app = express();

  // This middleware should be added before calling `applyMiddleware`.
  app.use(graphqlUploadExpress());
  //app.use(logger("tiny"))
  app.use("/static", express.static("uploads"));

  server.applyMiddleware({ app });

  await new Promise((r) => app.listen({ port: process.env.PORT || 4000 }, r));

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startServer();
