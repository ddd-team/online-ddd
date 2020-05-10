import { Express } from "express-serve-static-core";
import graphqlHTTP from "express-graphql";
import { buildSchema } from "graphql";

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return "Hello world!";
  },
};

export const initGraphQL = (app: Express) => {
  app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true,
    })
  );
};
