const express = require("express");
const mongoose = require("mongoose");
const app = express();
const TodoModel = require("./models/todo");

const PORT = 3000;

app.get("/", express.static("assets"));

// app.get("/", (req, res) => {
//   res.render(assets/index.html);
// });

mongoose.connect("mongoose://localhost/mydata", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log(`listening to port: ${PORT}`);
});
