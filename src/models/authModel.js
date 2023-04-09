const { DataTypes } = require("sequelize");
const sequelize = require("./conn");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  fullName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.TEXT,
  },
  userSide: {
    type: DataTypes.STRING,
  },
  levelOfEducation: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

User.sync({ force: false, alter: true }).then(() =>
  console.log("database syncing")
);

module.exports = User;
