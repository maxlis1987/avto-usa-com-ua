const { User, Post } = require('./data/store');

const Query = {
	users: () => User.findAll(),
	posts: () => Post.findAll(),
	post: (_, { id }, { posts }) => Post.findById(id)
};

module.exports = { Query };
