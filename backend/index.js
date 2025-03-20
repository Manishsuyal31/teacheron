const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// 1. connect to mongodb

async function connectToMongodb() {
  const mongoURI = "mongodb://localhost:27017/ecommerce";

  await mongoose.connect(mongoURI);

  console.log("Connected to MongoDB");
}

connectToMongodb();

// 2. create a schema
const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    rating: Number,
  },
  {
    collection: "myProduct",
  }
);

// 3 create a model
const ProductModel = mongoose.model("Product", productSchema);

app.use(cors());
app.use(express.json());

async function getProducts(req, res) {
  const products = await ProductModel.find();

  res.json(products);
}

app.get("/products", getProducts);

async function createProduct(req, res) {
  const product = await ProductModel.create(req.body);

  res.json(product);
}

app.post("/products", createProduct);

async function findProduct(req, res) {
  const product = await ProductModel.findById(req.query.id);

  res.json(product);
}

// ProductModel.findByIdAndDelete
// ProductModel.findByIdAndUpdate

app.get("/product", findProduct);

app.listen(3000);
