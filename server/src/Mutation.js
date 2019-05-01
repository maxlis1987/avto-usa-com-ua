const { User, Car } = require('./data/store');
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

	createCar: async (
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
			transmission,
			arriveDate
		}
	) => {
		try {
			const result = await Car.create({
				id: uuidv4(),
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
				transmission,
				arriveDate
			});

			return { ...result };
		} catch (error) {
			console.log('error', error);
		}
	},

	updateCar: async (
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
			transmission,
			arriveDate
		}
	) => {
		try {
			const result = await Car.update({
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
				transmission,
				arriveDate
			});
			return { ...result };
		} catch (error) {
			console.log('error');
		}
	},
	deleteCar: async (_, { id }) => {
		try {
			const result = await Car.delete({ id });
			return { ...result };
		} catch (error) {
			console.log('error');
		}
	}
};

module.exports = { Mutation };
