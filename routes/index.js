const router = require("express").Router();
const alienrouter = require("./alien");
const bookrouter = require("./books");
// router.use("/", (req, res) => {
//   res.send("Hello!");
// });

router.use("/alien",alienrouter);
router.use("/books", bookrouter);
module.exports = router;
