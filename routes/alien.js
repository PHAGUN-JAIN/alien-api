const router = require("express").Router();
const Alien = require("../models/alien");
// router.get("/", (req, res) => {
//   res.send("hello from alien route!");
// });

router.get("/", async (req, res) => {
  try {
    const aliens = await Alien.find();
    res.json(aliens);
  } catch (error) {
    console.log("Error" + error);
  }
});

module.exports = router;
