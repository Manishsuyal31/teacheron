import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const res = await axios.get("http://localhost:3000/products");

    setProducts(res.data);
  }

  async function addProduct() {
    const res = await axios.post("http://localhost:3000/products", {
      name: "New Product",
      price: 100,
      rating: 4,
    });

    // setProducts(res.data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  function deleteProduct(pid) {
    const newProducts = products.filter((product) => product.id !== pid);
    setProducts(newProducts);
  }

  return (
    <div className="">
      <a href="/login">Login</a>
      <a href="/register">Register</a>
      <br />
      <br />

      <button onClick={addProduct}>Add Product</button>
      <br />
      <br />

      <h1>products</h1>

      {products.map((product) => {
        return <ProductCard {...product} deleteProduct={deleteProduct} />;
      })}
    </div>
  );
}

function ProductCard({ name, price, rating, deleteProduct, id }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>Rating: {rating}</p>
      <button onClick={() => deleteProduct(id)}>delete</button>
    </div>
  );
}
