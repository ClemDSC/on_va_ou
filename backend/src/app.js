const express = require("express");

const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

app.use(express.json());

const destinationsRoutes = require("./routes/destinationsRoutes");

app.use("/destinations", destinationsRoutes);

app.get("/*", (req, res) => {
  res.status(404).send({ message: "Not found !" });
});

module.exports = app;
