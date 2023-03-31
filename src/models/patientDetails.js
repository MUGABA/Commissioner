const { DataTypes } = require("sequelize");
const sequelize = require("./conn");
const User = require("./authModel");

const PatientDetail = sequelize.define("PatientDetail", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  patientId: {
    type: DataTypes.BIGINT,
  },
  phoneNumber: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  height: {
    type: DataTypes.INTEGER,
  },
  weight: {
    type: DataTypes.INTEGER,
  },
  religiousBelieve: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  foodPreference: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  culturalFoods: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  lifeStyle: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  occupation: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  physicalActivities: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

User.hasMany(PatientDetail, { foreignKey: "patientId" });
PatientDetail.belongsTo(User, { foreignKey: "patientId" });

PatientDetail.sync({ force: false }).then(() =>
  console.log("database syncing")
);

module.exports = PatientDetail;
