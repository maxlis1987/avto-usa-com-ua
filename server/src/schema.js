const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    users: [User]
    posts: [Post]
    post(id: ID!): Post!
  }

  type Mutation {
    createUser(email: String!, first_name: String!, last_name: String): User!

    createPost(
      title: String,
      description: String,
      link: String,
      price: String,
      image_path: String,
      image_path_1: String,
      image_path_2: String,
      image_path_3: String,
      image_path_4: String,
      vincode: String,
      userId: String
      ): Post!

    updatePost(
      id: ID!,
      title: String,
      link: String,
      price: String,
      description: String,
      image_path: String,
      image_path_1: String,
      image_path_2: String,
      image_path_3: String,
      image_path_4: String,
      vincode: String
      ): Post!

    deletePost(id: ID!): Post!

  }

  type User {
    id: ID!
    email: String!
    first_name: String
    last_name: String
  }

  type Post {
    id: ID!
    vincode: String
    title: String
    description: String
    link: String
    price: String
    image_path: String
    image_path_1: String
    image_path_2: String
    image_path_3: String
    image_path_4: String
    createdAt: String
    updatedAt: String
    userId: String
  }
`;

module.exports = {
  typeDefs
};
