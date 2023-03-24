const express = require("express");
const auth = require("../middlewares/auth");
const User = require("../models/authModel");
const Care = require("../models/careModel");

const router = express.Router();

router.post("/make-request", auth, async (req, res) => {
  const { id } = req.user;

  const requestObject = {
    createdBy: id,
    ...req.body,
  };

  const care = await Care.create({ ...requestObject });

  return res.status(201).send({ data: care });
});

router.get("/", auth, async (req, res) => {
  const cares = await Care.findAll({
    include: [
      {
        model: User,
        attributes: ["fullName", "email"],
      },
    ],
  });

  return res.status(200).send({ data: cares });
});

router.get("/personal", auth, async (req, res) => {
  const { id } = req.user;

  const cares = await Care.findAll({
    where: { createdBy: id },
    include: [
      {
        model: User,
        attributes: ["fullName", "email"],
      },
    ],
  });

  return res.status(200).send({ data: cares });
});

router.get("/my-recommendations", auth, async (req, res) => {
  const { id } = req.user;

  const cares = await Care.findAll({
    where: { createdBy: id },
    include: [
      {
        model: User,
        attributes: ["fullName", "email"],
      },
    ],
  });

  return res.status(200).send({ data: cares });
});

router.get("/get-single/:id", auth, async (req, res) => {
  const { id } = req.params;

  try {
    const care = await Care.findOne({
      where: { id: id },
      include: [
        {
          model: User,
          attributes: ["fullName", "email"],
        },
      ],
    });

    return res.status(200).send({ data: care });
  } catch (error) {
    console.log(error);
  }
});

router.put("/food-recommended/:requestId", auth, async (req, res) => {
  const { id } = req.user;
  const { requestId } = req.params;
  const { recommendedFoods, description } = req.body;

  const care = await Care.update(
    {
      recommendedBy: id,
      recommendedFoods: recommendedFoods,
      description: description,
    },
    { where: { id: requestId } }
  );

  return res.status(200).send({ data: care });
});

module.exports = router;
