const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("hello from books route");
});

module.exports = router;