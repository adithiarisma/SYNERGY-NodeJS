const express = require("express");
const app = express();
const port = 8000;
const Morgan = require("morgan");
const Dotenv = require("dotenv");

// menggunakan template enginge ejs
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // Type Data Form
app.use(express.json()); // Type Data JSON
Dotenv.config({ path: "./config/Config.env" });

// Routing
const routing = require("./routes/routes");
app.use(routing);

//MongoDB
const ConnectMongoDB = require("./models/mongodb/Connection");
const routes = require("./routes/routes");
ConnectMongoDB();


app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
