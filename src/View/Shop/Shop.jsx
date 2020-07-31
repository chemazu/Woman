import React from "react";
import ProductCard from "../../Custom/ProductCard/ProductCard";
import "./Shop.scss";

export default function Shop() {
  return (
    <div className="Shop">
      <div className="nav">
        <p>Categories</p>
        <p>Filter</p>
        <p>Sort by</p>
        <p>See 2|4 </p>
      </div>
      <div className="products">
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
