const express = require("express");
const cors = require("cors");

const Users = require("./controllers/authController");
const Food = require("./controllers/foodController");
const Care = require("./controllers/careController");

module.exports = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/", (req, res) => {
    return res.status(200).send({ message: "message received" });
  });

  app.use("/auth", Users);
  app.use("/food", Food);
  app.use("/cares", Care);
};
