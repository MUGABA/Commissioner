const express = require("express");
const auth = require("../middlewares/auth");
const PatientDetails = require("../models/patientDetails");
const User = require("../models/authModel");

const router = express.Router();

router.post("/add-patient-details", auth, async (req, res) => {
  const { id } = req.user;

  const requestObject = {
    patientId: id,
    ...req.body,
  };

  const patient = await PatientDetails.findOne({ where: { patientId: id } });
  if (patient) {
    const patientDetails = await PatientDetails.update(
      { ...requestObject, patientId: id },
      { where: { patientId: id } }
    );

    return res.status(201).send({ data: patientDetails });
  } else {
    const patientDetails = await PatientDetails.create({ ...requestObject });

    return res.status(201).send({ data: patientDetails });
  }
});

router.get("/details", auth, async (req, res) => {
  const { id } = req.user;
  const patient = await PatientDetails.findOne({ where: { patientId: id } });
  return res.status(200).send({ data: patient });
});

router.get("/patient-details/:id", auth, async (req, res) => {
  const { id } = req.params;

  const patient = await PatientDetails.findOne({
    where: { patientId: id },
    include: [
      {
        model: User,
        attributes: ["fullName", "email"],
      },
    ],
  });

  return res.status(200).send({ data: patient });
});

module.exports = router;
