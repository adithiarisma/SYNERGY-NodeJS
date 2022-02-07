const Express = require("express");
const App = Express();
const port = 7777;
const Morgan = require("morgan");

App.set("view engine", "ejs");
// App.use(Express.static("public"));
App.use(Express.static(__dirname + "/public"));
App.use(Express.static(__dirname + "/images"));
App.use(Morgan("tiny"));

App.listen(port, function () {
  console.log("Listening on port " + port);
});

App.get("/", (req, res) => {
  res.render("index");
});

App.get("/detail", (req, res) => {
  res.render("detail");
});

App.get("/product", (req, res) => {
  res.render("product");
});
