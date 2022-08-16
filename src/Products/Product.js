import React, { useState, useEffect } from "react";
import { retrieveProduct } from "./ProductsService";
import { useParams, useNavigate } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const product = await retrieveProduct(id);
        setProduct(product);
      } catch (e) {
        console.warn(e);
        navigate("/", { replace: true, state: { id } });
      }
    })();
  }, [id]);
  if (product === null) {
    return <div></div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Description: {product.description}</p>
      <p>Price:{` € ${product.price / 100}`}</p>
      <button className="Product-Button" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default Product;
