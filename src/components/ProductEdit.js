import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import "../styles/ProductEdit.css";

function ProductEdit() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    stock: 0,
    price: 0,
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://localhost:7051/ProductId?id=${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error(
          "Hubo un error al obtener los datos del producto!",
          error
        );
        setError(error.message);
      });
  }, [id]);

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
      .put(`https://localhost:7051/Product?id=${product.id}`, {
        name: product.name,
        description: product.description,
        category: product.category,
        price: product.price,
      })
      .then((response) => {
        console.log(response);
        navigate("/products");
      })
      .catch((error) => {
        console.error("Hubo un error al actualizar el producto!", error);
        setError(error.message);
      });
  };

  return (
    <div className="product-edit">
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Descripción:
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Categoría:
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
          />
        </label>
        <label>
          Stock:
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
          />
        </label>
        <label>
          Precio:
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit">Actualizar producto</button>
      </form>
      <Footer />
    </div>
  );
}

export default ProductEdit;
