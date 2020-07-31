import React, { Component } from "react";
import "./ProductCard.scss";
import one from "../Images/Products/one.jpg";
import like from "../Images/like.svg";
import like2 from "../Images/like2.svg";

export class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      liked: true,
    };
  }
  handleLike = () => {
    this.setState({ liked: !this.state.liked });
  };
  render() {
    const { liked } = this.state;

    return (
      <div className="ProductCard">
        <img src={one} alt="one" />
        <div className="productText">
          <div className="productTextRight">
            <p>Title</p>
            <p>Description</p>
            <p>Price</p>
            <p>Variety</p>
          </div>
          <div className="productTextLeft" onClick={this.handleLike}>
            {liked ? (
              <img src={like} alt="unchecked" />
            ) : (
              <img src={like2} alt="checked" />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
