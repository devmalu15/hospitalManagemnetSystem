const express = require("express");
const router = express.Router();
const Hospital = require("../models/hospital");

router.get("/", async (req, res) => {
  const hospitals = await hospital.find();
  res.render("hospitals/index", { hospitals });
});


router.get("/new", (req, res) => {
  res.render("hospitals/new");
});


router.post("/", async (req, res) => {
  const { hospitalName, city, country, numberOfTerminals, hospitalCode, phoneNumber, runawayLength} = req.body;
  await hospital.create({ hospitalName, city, country, numberOfTerminals, hospitalCode, phoneNumber, runawayLength});
  res.redirect("/hospitals");
});


router.get("/:id/edit", async (req, res) => {
  const hospital = await hospital.findById(req.params.id);
  res.render("hospitals/edit", { hospital });
});

router.put("/:id", async (req, res) => {
  const { city, country, numberOfTerminals, hospitalCode, phoneNumber, runawayLength} = req.body;
  await Aiport.findByIdAndUpdate(req.params.id, { city, country, numberOfTerminals, hospitalCode, phoneNumber, runawayLength});
  res.redirect(`/hospitals/${req.params.id}`);
});


router.get("/:id", async (req, res) => {
  const hospital = await hospital.findById(req.params.id);
  res.render("hospitals/show", { hospital });
});

router.delete("/:id", async (req, res) => {
  await hospital.findByIdAndDelete(req.params.id);
  res.redirect("/hospitals");
});

module.exports = router;
