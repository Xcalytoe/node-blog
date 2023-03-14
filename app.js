const express = require("express");
const app = express();
// Resgister view engine
app.set("view engine", "ejs");
// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});
