require("dotenv").config();
const express = require("express");
const { connection } = require("./src/models/connect");
const path = require("path");

const app = express();

require("./src/startup")(app);
connection();

app.use(express.static("client/build"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

const port = process.env.PORT || 5002;

app.listen(port, () => console.log("Server is running now"));
