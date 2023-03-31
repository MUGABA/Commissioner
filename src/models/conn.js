const { Sequelize } = require("sequelize");

module.exports = sequelize = new Sequelize(process.env.DB, {
  dialect: "postgres",
  logging: false,
});
