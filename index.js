const { ApolloServer } = require('apollo-server');
const sequelize = require('sequelize');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen()
    .then(({ url }) => {
        console.log(`Server ready at ${url}`)
    });