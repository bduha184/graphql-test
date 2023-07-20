import { ApolloServer } from "@apollo/server";
import { startServerAndCreateH3Handler } from "@as-integrations/h3";

const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;
const resolvers = {
  Query: {
    hello: () => "world",
  },
};
const apollo = new ApolloServer({
  typeDefs,
  resolvers,
});

export default startServerAndCreateH3Handler(apollo);
