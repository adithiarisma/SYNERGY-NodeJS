const express = require("express");
const routes = express.Router();

// Memanggil file controller
const indexController = require("../controllers/index");
const productController = require("../controllers/product");
const detailController = require("../controllers/detail");

// Home
routes.get("/", homeController.index);
// Product
routes.get("/product", productController.getProduct);
// Detail
routes.get("/detail", detailController.getDetail);

module.exports = routes;
