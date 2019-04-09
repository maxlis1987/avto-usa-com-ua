const { ApolloServer, gql, AuthenticationError } = require("apollo-server");
// const Express = require("express");
const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");
const { typeDefs } = require("./schema");
const { Query } = require("./Query");
const { Mutation } = require("./Mutation");

// const client = jwksClient({
//   jwksUri: `https://dev-wkyjoddr.auth0.com/.well-known/jwks.json`
// });

// function getKey(header, cb) {
//   client.getSigningKey(header.kid, function(err, key) {
//     var signingKey = key.publicKey || key.rsaPublicKey;
//     cb(null, signingKey);
//   });
// }

// const options = {
//   audience: "8p9t7Wt45PIfYAb4tr2YqtpcCTmg3ZJP",
//   issuer: `https://dev-wkyjoddr.auth0.com`,
//   algorithms: ["RS256"]
// };

const resolvers = {
  Query,
  Mutation
  // Author: {
  //   books: author => filter(books, { authorId: author.id })
  // },
  // Book: {
  //   author: book => find(authors, { id: book.authorId })
  // }
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  // context: ({ req }) => {
    // const token = req.headers.authorization;
    // const user = new Promise((resolve, reject) => {
    //   jwt.verify(token, getKey, options, (err, decoded) => {
    //     if (err) {
    //       return reject(err);
    //     }
    //     resolve(decoded.email);
    //   });
    // });
    // return { user };
  // }
});

apolloServer.listen(4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
