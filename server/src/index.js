const { ApolloServer } = require('apollo-server');
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
	resolvers,
	uploads: {
		maxFileSize: 10000000, // 10 MB
		maxFiles: 20
	}
});

server.applyMiddleware({ app });

app.listen(process.env.PORT, (error) => {
	if (error) throw error;
	console.info(`Serving http://localhost:${process.env.PORT} for ${process.env.NODE_ENV}.`);
});
