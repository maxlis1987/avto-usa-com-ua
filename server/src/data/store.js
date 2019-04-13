const Sequelize = require("sequelize");
const casual = require("casual");
// import _ from "lodash";
const _ = require("lodash");

const db = new Sequelize("dear", null, null, {
  dialect: "sqlite",
  storage: "./src/data/dear.sqlite"
});

const UserModel = db.define("user", {
  email: { type: Sequelize.STRING },
  first_name: { type: Sequelize.STRING },
  last_name: { type: Sequelize.STRING },
});

const PostModel = db.define("post", {
  title: { type: Sequelize.STRING },
  description: { type: Sequelize.STRING },
  userId: { type: Sequelize.STRING },
  link: { type: Sequelize.STRING },
  price: { type: Sequelize.STRING },
  vincode: { type: Sequelize.STRING },
  image_path: { type: Sequelize.STRING },
});

UserModel.hasMany(PostModel);
PostModel.belongsTo(UserModel);

// create fake data with a seed
// casual.seed(123);
// db.sync({ force: true }).then(() => {
//   _.times(1, () => {
//     return UserModel.create({
//       email: casual.email,
//       first_name: casual.first_name,
//       last_name: casual.last_name
//     }).then(user => {
//       return user.createPost({
//         dear: casual.title,
//         content: casual.description
//       });
//     });
//   });
// });

const User = db.models.user;
const Post = db.models.post;

module.exports = { User, Post };
