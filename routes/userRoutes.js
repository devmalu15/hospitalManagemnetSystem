const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  const users = await user.find();
  res.render("users/index", { users });
});


router.get("/new", (req, res) => {
  res.render("users/new");
});


router.post("/", async (req, res) => {
  const { userName, address, age, isPatient} = req.body;
  await user.create({ userName, address, age, isPatient});
  res.redirect("/users");
});


router.get("/:id/edit", async (req, res) => {
  const user = await user.findById(req.params.id);
  res.render("users/edit", { user });
});

router.put("/:id", async (req, res) => {
  const { userName, address, age, isPatient} = req.body;
  await Aiport.findByIdAndUpdate(req.params.id, { userName, address, age, isPatient});
  res.redirect(`/users/${req.params.id}`);
});


router.get("/:id", async (req, res) => {
  const user = await user.findById(req.params.id);
  res.render("users/show", { user });
});

router.delete("/:id", async (req, res) => {
  await user.findByIdAndDelete(req.params.id);
  res.redirect("/users");
});

module.exports = router;
