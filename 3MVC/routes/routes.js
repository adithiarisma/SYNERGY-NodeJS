const express = require("express");
const routes = express.Router();

// Memanggil file controller
const indexController = require("../controllers/index");
const detailController = require("../controllers/detail");
const productController = require("../controllers/productView");
const ProductApiController = require("../controllers/product");
const UserApiController = require("../controllers/user");

// Home
routes.get("/", indexController.index);

// Detail
routes.get("/detail", detailController.getDetail);

// Product
routes.get("/product", productController.getProduct);
routes.get("/product/api", productController.APIData);

// API Product
routes.get("/product/api/all", ProductApiController.All);
routes.get("/product/api/findOne/:id", ProductApiController.FindOne);
routes.post("/product/api/create", ProductApiController.Create);
routes.post("/product/api/delete", ProductApiController.Delete);


// API User
routes.get("/user/api/findall", UserApiController.findAll);
routes.get("/user/api/findOne/:id", UserApiController.findOne);
routes.post("/user/api/create", UserApiController.create);
routes.post("/user/api/delete", UserApiController.delete);
routes.post("/user/api/update", UserApiController.update);

module.exports = routes;
