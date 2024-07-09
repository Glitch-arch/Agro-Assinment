const express = require("express");
const bodyParser = require("body-parser");
const serverConfig = require("./config/server.config");
const connectToDB = require("./config/db.config");
const { apiRouter } = require("./routes/index.js");
const { connection } = require("mongoose");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3001", "https://agro-frontend.onrender.com"],
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Function call to connect to the database
connectToDB();

//  Basic Ping Check
app.get("/ping", (req, res) => {
  res.status(200).json({
    message: "Ping Check, Server/Problem service is running.",
  });
});

//  API Router
// console.log("API Router", apiRouter);
app.use("/api", apiRouter);

// Server setup
function startServer() {
  app.listen(serverConfig.PORT, () => {
    console.log("Server is up on port", serverConfig.PORT);
  });
}

startServer();
