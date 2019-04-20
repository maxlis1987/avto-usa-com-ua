const { User, Post, Upload } = require('./data/store');

const Query = {
	users: () => User.findAll(),
	posts: () => Post.findAll(),
	post: (_, { posts }, { id }) => Post.find(posts, { id })
};

module.exports = { Query };
