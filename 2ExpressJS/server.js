const express = require("express");
const app = express();
const port = 8000;

// menggunakan template enginge ejs
app.set("view engine", "ejs");
app.use(express.static("public"));

// Routing
const routing = require("./routes/routes");
app.use(routing);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
