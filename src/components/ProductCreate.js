import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import "../styles/ProductCreate.css";

function ProductCreate() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    stock: 0,
    price: 0,
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !product.name ||
      !product.description ||
      !product.category ||
      !product.stock ||
      !product.price
    ) {
      setError("Todos los campos son obligatorios");
      return;
    }

    axios
      .post("https://localhost:7051/Product", product)
      .then((response) => {
        console.log(response);
        navigate("/products");
      })
      .catch((error) => {
        console.error("Hubo un error al crear el producto!", error);
        setError(error.message);
      });
  };

  return (
    <div className="product-create">
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <label>
          Descripción:
          <input type="text" name="description" onChange={handleChange} />
        </label>
        <label>
          Categoría:
          <input type="text" name="category" onChange={handleChange} />
        </label>
        <label>
          Stock:
          <input type="number" name="stock" onChange={handleChange} />
        </label>
        <label>
          Precio:
          <input type="number" name="price" onChange={handleChange} />
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit">Crear producto</button>
      </form>
      <Footer />
    </div>
  );
}

export default ProductCreate;
