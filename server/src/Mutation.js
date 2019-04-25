const { User, Post } = require('./data/store');
const uuidv4 = require('uuid/v4');
const Mutation = {
	createUser: async (_, { email, first_name, last_name }) => {
		return User.create({
			email,
			first_name,
			last_name
		}).then((user) => {
			return user;
		});
	},

	createPost: async (
		_,
		{
			title,
			description,
			link,
			image_path,
			price,
			vincode,
			drive,
			fuelType,
			engineVolume,
			odometer,
			typeBody,
			transmission
		}
	) => {
		try {
			const result = await Post.create({
				title,
				description,
				link,
				image_path,
				price: price + ' $',
				vincode,
				userId: uuidv4(),
				drive,
				fuelType,
				engineVolume,
				odometer,
				typeBody,
				transmission
			});

			return { ...result };
		} catch (error) {
			console.log('error', error);
		}
	},

	updatePost: async (
		_,
		{
			id,
			title,
			description,
			link,
			image_path,
			price,
			vincode,
			drive,
			fuelType,
			engineVolume,
			odometer,
			typeBody,
			transmission
		}
	) => {
		try {
			const result = await Post.update({
				id,
				title,
				description,
				link,
				image_path,
				price,
				vincode,
				drive,
				fuelType,
				engineVolume,
				odometer,
				typeBody,
				transmission
			});
			return { ...result };
		} catch (error) {
			console.log('error');
		}
	},
	deletePost: async (_, { id }) => {
		try {
			const result = await Post.delete({ id });
			return { ...result };
		} catch (error) {
			console.log('error');
		}
	}
};

module.exports = { Mutation };
