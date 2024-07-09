const express = require("express");
const v1Router = express.Router();

const productRouter = require("./product.routes");

v1Router.use("/product", productRouter);

// console.log("V1 Router", v1Router);
module.exports = v1Router;
