const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const hopitalRoutes = require("./routes/hopitalRoutes");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/hospitals_db")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use("/hospitals", hospitalRoutes);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
