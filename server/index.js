const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./routes/ToDoRoutes");

const app = express();
const port = process.env.PORT || 8001;

app.use(express.json());

app.use(routes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to database");
    app.listen(port, () => {
      console.log(`listning on port  ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
    process.exit(1);
  });

app.get("/user", (req, res) => {
  res.send({ name: "swapnil" });
});
