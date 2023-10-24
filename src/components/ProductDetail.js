import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import "../styles/ProductDetail.css";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://localhost:7051/ProductId?id=${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Hubo un error!", error);
      });
  }, [id]);

  if (!product) return <div>Cargando...</div>;

  return (
    <div className="product-detail">
      <div>
        <h1>Nombre:</h1>
        <p>{product.name}</p>
      </div>
      <div>
        <h1>Descripción:</h1>
        <p>{product.description}</p>
      </div>
      <div>
        <h1>Categoría:</h1>
        <p>{product.category}</p>
      </div>
      <div>
        <h1>Stock:</h1>
        <p>{product.stock}</p>
      </div>
      <div>
        <h1>Precio:</h1>
        <p>{product.price}</p>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;
