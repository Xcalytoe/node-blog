const express = require("express");
const app = express();
// Resgister view engine
app.set("view engine", "ejs");
// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

app.listen(3000);

app.get("/", (req, res) => {
  res.render("index");
});
app.get("about-us", (req, res) => {
  res.render("about");
});
app.get("/about", (req, res) => {
  res.redirect("/about-us");
});
app.use((req, res) => {
  res.status(404).render("404");
});
