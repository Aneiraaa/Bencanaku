const express = require("express");
const router = express.Router();
const auth = require("./auth");
const article = require("./article");

router.get("/test", (req, res) => {
  return res.status(200).json({ message: "Router Successfully" });
});

router.use("/auth", auth);
router.use("/article", article);

module.exports = router;
