const express = require("express");
const generateToken = require("../middlewares/generateToken");
const User = require("../models/authModel");

const router = express.Router();

router.post("/patient-register", async (req, res) => {
  const { email } = req.body;

  const userExists = await User.findOne({ where: { email } });
  if (userExists) {
    return res
      .status(400)
      .send({ message: "User with that email already exists, Try login" });
  }
  const user = await User.create({ ...req.body });

  const { id, fullName, email: returnEmail, userSide } = user;

  const token = generateToken(id, returnEmail, fullName, userSide);

  return res
    .status(201)
    .header("x-auth-token", token)
    .header("access-control-expose-headers", "x-auth-token")
    .send({
      data: user,
      token,
    });
});

router.post("/patient-doc", async (req, res) => {
  const { email } = req.body;

  const userExists = await User.findOne({ where: { email } });
  if (userExists) {
    return res
      .status(400)
      .send({ message: "User with that email already exists, Try login" });
  }
  const user = await User.create({ ...req.body });

  return res.status(201).send({
    data: user,
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const userExists = await User.findOne({ where: { email } });
  if (!userExists) {
    return res.status(400).send({ message: "Wrong Email or Password" });
  }

  const {
    id,
    fullName,
    email: returnEmail,
    userSide,
    password: returnedPassword,
  } = userExists;
  if (password !== returnedPassword)
    return res.status(400).send({ message: "Wrong Email or Password" });

  const token = generateToken(id, returnEmail, fullName, userSide);

  return res
    .status(200)
    .header("x-auth-token", token)
    .header("access-control-expose-headers", "x-auth-token")
    .send({
      data: userExists,
      token,
    });
});

router.get("/users", async (req, res) => {
  const users = await User.findAll();

  return res.status(200).send({ data: users });
});

module.exports = router;
