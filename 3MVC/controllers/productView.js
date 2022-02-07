const axios = require("axios");
// const fetch = require("fetch");

let AllProducts = [
  {
    name: "Galactus la parte 1",
    image: "product-1.png",
  },
  {
    name: "Galactus la parte 2",
    image: "product-2.png",
  },
  {
    name: "Galactus la parte 3",
    image: "product-3.png",
  },
  {
    name: "Galactus la parte 4",
    image: "product-4.png",
  },
  {
    name: "Galactus la parte 5",
    image: "product-5.png",
  },
  {
    name: "Galactus la parte 6",
    image: "product-6.png",
  },
  {
    name: "Galactus la parte 7",
    image: "product-7.png",
  },
  {
    name: "Galactus la parte 8",
    image: "product-8.png",
  },
  {
    name: "Galactus la parte 9",
    image: "product-9.png",
  },
];

// Belajar Ambil data products
exports.getProduct = (req, res) => {
  res.render("product", {
    //process.env.Secretkey
    products: AllProducts,
  });
};

// Belajar Axios
exports.findAll = (req, res) => {
  axios("my-json-server.typicode.com/user/repo/posts/1")
    .then((data) => {
      console.log(data);
      res.send({
        message: "sukses",
        status_code: 200,
        result: dataProducts,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// Belajar Get Data
exports.APIData = (req, res) => {
  res.send({
    message: "sukses",
    statusCode: 200,
    result: AllProducts,
  });
};
