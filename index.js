const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Test");
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
