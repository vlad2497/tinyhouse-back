//Core
import express from "express";
import { ApolloServer } from "apollo-server-express";
//Schema
import { resolvers, typeDefs } from "./graphql";

const app = express();
const port = 9000;

const server = new ApolloServer({ resolvers, typeDefs });
server.applyMiddleware({ app, path: "/api" });

app.listen(port);
