import React from "react";
import one from "../Images/Products/FloralDress/floralDress1.jpg";
import "./ProductPage.scss";

export default function ProductPage() {
  return (
    <div className="ProductPage">
      <div className="productInformation">
        <div className="productImages">
          <div className="big">
            <img src={one} alt="like" />
            <p>ru</p>
            <img src={one} alt="like" />
            <p>ru</p>
          </div>
          <div className="small">
            <img src={one} alt="like" />
            <p>ru</p>
            <img src={one} alt="like" />
            <p>ru</p>
            <img src={one} alt="like" />
            <p>ru</p>
          </div>
        </div>
        <div className="productActions">
          <p>Title</p>
          <p>Description</p>
          <p>Category</p>
          <p>Price</p>
          <p>Variety</p>
          <p>
            Store availability Product details Shareose your size Add to
            wishlisthAdding item to wishlist...
          </p>
        </div>
      </div>
      <div className="additonalProducts">
        <p>Related Items</p>
      </div>
    </div>
  );
}
