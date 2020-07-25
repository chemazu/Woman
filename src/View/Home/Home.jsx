import React from "react";
import "./Home.scss";
import Input from "../../Custom/Input/Input";
import right from "../../Custom/Images/right.jpg";
import Subscribe from "../../Custom/Subscribe/Subscribe";

export default function Home() {
  return (
    <div>
      <div className="disclaimer">
        <p>
          The images used in this webpage are not a representation of the person
          or indication of affilliation of said person.
        </p>
      </div>
      <div className="header">
        <h1 className="headerText">Celebrating Black Women.</h1>
      </div>
      <div className="searchDiv">
        <Input content={"Search Woman"} type={"search"} />
      </div>
      <div className="firstSection">
        <div className="left">
          <div className="categories">
            <h1>Categories</h1>
            <p>Art</p>
            <p>Food</p>
            <p>Fashion</p>
            <p>Tech</p>
          </div>
          <div className="categoryImageWrapper">
            <div className="one">1</div>
            <div className="two">2</div>
            <div className="three">3</div>
          </div>
        </div>
        <div className="right">Tech</div>
      </div>
      <div className="shop ">
        <p style={{ maxWidth: "800px" }}>
          Here at Quay Woman, we sell sustainable products that are sourced
          through eco-friendly products all profits are donated to a charity
          that assist in the development of disenfranchised youth{" "}
        </p>
        <p className="reservationButton">Shop Now</p>
      </div>
      <Subscribe />
    </div>
  );
}
