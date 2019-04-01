const { AuthenticationError } = require("apollo-server");
const { authors, books } = require("./faker");
const { User, Post } = require("./data/store");

const Mutation = {
  // addBook: (_, { title, cover_image_url, average_rating, authorId }) => {
  //   book_id++;

  //   const newBook = {
  //     id: book_id,
  //     title,
  //     cover_image_url,
  //     average_rating,
  //     author_id
  //   };

  //   books.push(newBook);
  //   return newBook;
  // },

  createUser: async (_, { email, first_name, last_name }) => {
    return User.create({
      email: email,
      first_name: first_name,
      last_name: last_name
    }).then(user => {
      return user;
    });
  },

  createPost: async (_, { title, text }) => {
    try {
      const newPost = await Post.create({
        title: title,
        text: text
      });
      return newPost;
    } catch (e) {
      throw new AuthenticationError("pls log in");
    }
  },
  updatePost: async (_, { id, title, text }) => {

    try {
      const result = await Post.update({ id, title, text });
      return { ...result }
    } catch (error) {
      console.log('error')
    }
  }
};

module.exports = { Mutation };
