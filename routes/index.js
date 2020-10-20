const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  // want to send the request to the user
  res.send("Home Page: Exercise Three");
});

module.exports = router;
