import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import {
  FaPlus,
  FaPencilAlt,
  FaTrashAlt,
  FaSearch,
  FaInfoCircle,
} from "react-icons/fa";
import "../styles/ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://localhost:7051/ProductAll")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://localhost:7051/ProductId?id=${id}`)
      .then((response) => {
        setProducts(products.filter((product) => product.id !== id));
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div className="product-list">
      <div className="top-bar">
        <div className="search-bar">
          <FaSearch />
          <input
            type="text"
            placeholder="Buscar producto..."
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
        <Link to="/products/add" className="add-button">
          <FaPlus /> Agregar productos
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter((product) => {
              if (searchTerm === "") return true;
              else if (
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
                return true;
              else return false;
            })
            .map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td className="actions">
                  <Link
                    to={`/products/edit/${product.id}`}
                    className="edit-button"
                  >
                    <FaPencilAlt />
                  </Link>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="delete-button"
                  >
                    <FaTrashAlt />
                  </button>
                  <Link
                    to={`/products/${product.id}`}
                    className="detail-button"
                  >
                    <FaInfoCircle />
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
}

export default ProductList;
