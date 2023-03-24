const express = require("express");
const Food = require("../models/foodsModel");

const router = express.Router();

router.post("/", async (req, res) => {
  const { name } = req.body;

  const checkFoodExists = await Food.findOne({ where: { name } });
  if (checkFoodExists)
    return res.status(400).send({ message: "Food Already Exists!" });

  const food = await Food.create({ name });

  return res.status(201).send({ data: food });
});

router.get("/", async (req, res) => {
  const foods = await Food.findAll();

  return res.status(200).send({ data: foods });
});
module.exports = router;
