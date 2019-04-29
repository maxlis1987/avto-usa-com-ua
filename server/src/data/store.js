const Sequelize = require('sequelize');
const casual = require('casual');
const _ = require('lodash');

const db = new Sequelize('dear', null, null, {
	dialect: 'sqlite',
	storage: './src/data/dear.sqlite'
});

const UserModel = db.define('user', {
	username: { type: Sequelize.STRING },
	password: { type: Sequelize.STRING }
});

const PostModel = db.define('post', {
	title: { type: Sequelize.STRING },
	description: { type: Sequelize.STRING },
	link: { type: Sequelize.STRING },
	price: { type: Sequelize.STRING },
	vincode: { type: Sequelize.STRING },
	userId: { type: Sequelize.STRING },
	image_path: { type: Sequelize.STRING },
	drive: { type: Sequelize.STRING },
	engineVolume: { type: Sequelize.STRING },
	typeBody: { type: Sequelize.STRING },
	transmission: { type: Sequelize.STRING },
	odometer: { type: Sequelize.STRING },
	fuelType: { type: Sequelize.STRING },
	createdAt: { type: Sequelize.STRING },
	updatedAt: { type: Sequelize.STRING }
});

UserModel.hasMany(PostModel);
PostModel.belongsTo(UserModel);

const User = db.models.user;
const Post = db.models.post;

module.exports = { User, Post };
