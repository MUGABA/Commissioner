require("dotenv").config();
const express = require("express");
const { connection } = require("./src/models/connect");
const path = require("path");

const app = express();

app.use(express.static("client/build"));

require("./src/startup")(app);
connection();

app.get("/", () => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

const port = process.env.PORT || 5002;

app.listen(port, () => console.log("Server is running now"));
