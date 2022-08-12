import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={product.id} className="productCardStyles">
      <div>{product.name}</div>
    </Link>
  );
};

export default ProductCard;
