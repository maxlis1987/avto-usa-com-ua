const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    users: [User]
    posts: [Post]
  }

  type Mutation {
    createUser(email: String!, first_name: String!, last_name: String): User!
    createPost(title: String, text: String): Post!
    updatePost(id: Int!, title: String, text: String): Post!

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
  }
`;

module.exports = {
  typeDefs
};
