const { typeDefs } = require('./schema');
const { Query } = require('./Query');
const { Mutation } = require('./Mutation');

const apolloServerKoa = require('apollo-server-koa');
const Koa = require('koa');

const app = new Koa();
const resolvers = {
	Query,
	Mutation
};

const server = new apolloServerKoa.ApolloServer({
	typeDefs,
	resolvers
});

server.applyMiddleware({ app });

app.listen(14951, (error) => {
	if (error) throw error;
	console.info(`Serving http://localhost:14951 .`);
});
