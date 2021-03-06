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

router.get("/:id", async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    res.json(alien);
  } catch (error) {
    console.log("Error" + error);
  }
});

router.post("/", async (req, res) => {
  const alien = new Alien({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
  });
  try {
    const a = await alien.save();
    res.json(a);
  } catch (err) {
    console.log(err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    alien.sub = req.body.sub;
    const a = await alien.save();
    res.json(a);
  } catch (error) {
    res.send("error");
    console.log("Error" + error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    const a = await alien.deleteOne();
    res.json(a);
  } catch (error) {
    res.send("error");
    console.log(error);
  }
});
module.exports = router;
