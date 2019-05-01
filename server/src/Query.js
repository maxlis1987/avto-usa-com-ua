const { User, Car } = require('./data/store');

const Query = {
	users: () => User.findAll(),
	cars: () => Car.findAll(),
	car: (_, { id }, { cars }) => Car.findById(id)
};

module.exports = { Query };
