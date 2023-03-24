const { DataTypes } = require("sequelize");
const { sequelize } = require("./connect");
const User = require("./authModel");

const Care = sequelize.define("Care", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  createdBy: {
    type: DataTypes.BIGINT,
  },
  anyAllergies: {
    type: DataTypes.STRING,
  },
  allergicFoods: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  beenDiagnosed: {
    type: DataTypes.STRING,
  },
  beenDiagnosed: {
    type: DataTypes.STRING,
  },
  diagnosedDisease: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  recommendedFoods: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  recommendedBy: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

User.hasMany(Care, { foreignKey: "createdBy" });
Care.belongsTo(User, { foreignKey: "createdBy" });

Care.sync({ force: false }).then(() => console.log("database syncing"));

module.exports = Care;
