const { gql } = require('apollo-server');

const typeDefs = gql`
	type Query {
		users: [User]
		posts: [Post]
		post(id: ID!): Post!
		user(id: ID!): User!
	}

	type Mutation {
		createUser(username: String, password: String, createdAt: String): User!
		createPost(
			title: String
			description: String
			link: String
			price: String
			image_path: String
			vincode: String
			engineVolume: String
			typeBody: String
			transmission: String
			odometer: String
			fuelType: String
			drive: String
		): Post!
		updatePost(
			id: ID!
			title: String
			link: String
			price: String
			description: String
			image_path: String
			vincode: String
			engineVolume: String
			typeBody: String
			transmission: String
			odometer: String
			fuelType: String
			drive: String
		): Post!
		deletePost(id: ID!): Post!
	}

	type User {
		id: ID!
		username: String
		password: String
	}

	type Post {
		id: ID!
		vincode: String
		title: String
		description: String
		link: String
		price: String
		userId: String
		image_path: String
		createdAt: String
		updatedAt: String
		engineVolume: String
		typeBody: String
		transmission: String
		odometer: String
		fuelType: String
		drive: String
	}
`;

module.exports = {
	typeDefs
};
