const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    users: [User]
    posts: [Post]
    post(id: Int!): Post!
  }

  type Mutation {
    createUser(email: String!, first_name: String!, last_name: String): User!
    createPost(title: String, text: String, link: String, price: Int!, image_path: String): Post!
    updatePost(id: Int!, title: String, link: String, price: Int!, text: String, image_path: String): Post!
    deletePost(id: Int!): Post!

  }

  #
  type User {
    id: ID!
    email: String!
    first_name: String
    last_name: String
  }

  type Post {
    id: ID!
    title: String
    text: String
    link: String
    price: Int!
    image_path: String
    createdAt: String
    updatedAt: String
  }
`;

module.exports = {
  typeDefs
};
