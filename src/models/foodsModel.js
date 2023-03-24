const { DataTypes } = require("sequelize");
const { sequelize } = require("./connect");

const Food = sequelize.define("Food", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

Food.sync({ force: false }).then(() => console.log("database syncing"));

module.exports = Food;
