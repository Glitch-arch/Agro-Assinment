const express = require("express");
const productRouter = express.Router();

const { productController } = require("../../controllers/index");

productRouter.get("/ping", productController.ping);
productRouter.post("/addProduct", productController.addProduct)
productRouter.get("/fetchAllProduct", productController.getAllProducts)
productRouter.post("/insertDummyData", productController.insertDummyData)
// console.log("Product Router", productRouter);
module.exports = productRouter;
