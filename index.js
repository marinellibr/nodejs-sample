const express = require("express");
const cors = require("cors");
const router = require("./src/routes/routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

var port = 3000;

app.listen(port, () => {
  console.log(`App running on: ${port}`);
});

app.get("/", (req, res) => {
  res.send("This is the main page for the API");
});
