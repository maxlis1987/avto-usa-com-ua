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
      email,
      first_name,
      last_name
    }).then(user => {
      return user;
    });
  },

  createPost: async (_, { title, description, link, image_path, price, vincode, userId }) =>  {
    try {
      const result = await Post.create({
        title,
        description,
        link,
        image_path,
        price,
        vincode,
        userId
      });

      return { ...result }
    }
    catch (error) {
      console.log('error', error)
    }
  },

  updatePost: async (_, { id, title, description, link, image_path, price, vincode }) => {

    try {
      const result = await Post.update({ id, title, description, link, image_path, price, vincode });
      return { ...result }
    } catch (error) {
      console.log('error')
    }
  },
  deletePost: async (_, { id }) => {

    try {
      const result = await Post.delete({ id });
      return { ...result }
    } catch (error) {
      console.log('error')
    }
  }
};

module.exports = { Mutation };
