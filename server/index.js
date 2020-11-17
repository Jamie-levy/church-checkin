require("dotenv").config();
const express = require("express");
const cors = require("cors");

const server = express();
const PORT = process.env.PORT || 5000;

server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  console.log(req);
  return res.status(419).json({ error: "I'm a little teapot!" });
});

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}.`);
});
