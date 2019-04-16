
///////////////////////////////////////

const express = require("express");
const { ApolloServer } = require('apollo-server-express');
const fs = require('fs')
const http = require('http')
const  {typeDefs}  = require("./schema");
const {Query}  = require("./Query");
const {Mutation} = require("./Mutation");
const NoIntrospection = require('graphql-disable-introspection');
const bodyParser = require('body-parser')
const { graphqlExpress } = require('graphql-server-express');

const resolvers = {
  Query,
  Mutation

};


const configurations = {
  // Note: You may need sudo to run on port 443
  production: { port: 8080, hostname: 'sales.avto-usa.com.ua' },
  development: { port: 4000, hostname: 'localhost' }
};

const environment = process.env.NODE_ENV || 'production';
const config = configurations[environment];

const apollo = new ApolloServer({ typeDefs, resolvers });

const app = express();

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema: typeDefs,
  validationRules: [NoIntrospection]
}));

apollo.applyMiddleware({ app });

// Create the HTTPS or HTTP server, per configuration
var server

server = http.createServer(app)
// Add subscription support
apollo.installSubscriptionHandlers(server)
console.log(server.hostname)
server.listen({ port: config.port }, () =>
  console.log(
    '🚀 Server ready at',
    `http://${config.hostname}:${config.port}${apollo.graphqlPath}`
  )
)