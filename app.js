require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, ".", "client/build")));

require("./src/startup")(app);
require("./src/models/connect")();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "client/build", "index.html"));
});

const port = process.env.PORT || 5006;

app.listen(port, () => console.log("Server is running now"));
//postgres://app_rw_pvhlxqoh633d7ke5j6n5fikgcy:ARozWGD1lU-T-PgTi0S6k0AYRlxTqkag@pg-tunnel.borealis-data.com:55859/dkj6ffetoqkyxtdtp7epvv6fg2a
