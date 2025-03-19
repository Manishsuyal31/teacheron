const express = require("express");
const cors = require("cors");

const app = express();

const products = [
  {
    id: 1,
    name: "Shoes",
    price: 500,
    rating: 5,
  },
  {
    id: 2,
    name: "Shirt",
    price: 20,
    rating: 4,
  },
  {
    id: 3,
    name: "Pants",
    price: 30,
    rating: 3,
  },
];

app.use(cors());
app.use(express.json());

function getHello(req, res) {
  res.json(products);
}

app.get("/products", getHello);

function createProduct(req, res) {
  products.push({
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
    rating: req.body.rating,
  });

  res.json(products);
}

app.post("/products", createProduct);

app.listen(3000);
