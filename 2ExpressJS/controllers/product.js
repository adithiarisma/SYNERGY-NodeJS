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
    name: "Galactus la partee 7",
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

exports.getProduct = (req, res) => {
  res.render("product", {
    products: AllProducts,
  });
};
