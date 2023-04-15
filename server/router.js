const express = require("express");
const router = express.Router();

// first route

router.get("/", (req, res) => {
  res.send("Server listening ");
});

module.exports = router;
