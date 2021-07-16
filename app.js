const express = require("express");
const mongoose = require("mongoose");

const PORT = 3000;
const app = express();

const routes = require("./routes");
// mongoose.connect()
mongoose.connect("mongodb://localhost:27017/mydata", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const con = mongoose.connection;

con.on("open", () => {
  console.log("successfully connected to mongodb...");
});
app.use(express.json());
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`listening to prot: ${PORT}`);
});
