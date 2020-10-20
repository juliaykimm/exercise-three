const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  // want to send the response to the requestor
  res.send("Home Page: Exercise Three");
});

module.exports = router;
