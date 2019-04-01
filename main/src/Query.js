const { authors, books } = require("./faker");
const { User, Post } = require("./data/store");

const Query = {
  users: () => User.findAll(),

  posts: () => Post.findAll()

  // books: () => books,
  // book: (_, { id }) => find(books, { id: id }),
  // author: (_, { id }) => find(authors, { id: id })
};

module.exports = { Query };
