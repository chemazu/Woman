import React from "react";
import "./Home.scss";
import Search from "../../Custom/Search/Search";
import right from "../../Custom/Images/right.jpg";

export default function Home() {
  return (
    <div>
      <div className="disclaimer">
        <p>
          The images used in this webpage are not representation of the person
          or any affilliation
        </p>
      </div>
      <div className="header">
        <h1 className="headerText">Celebrating Black Women.</h1>
      </div>
      <div className="searchDiv">
        <Search />
      </div>
      <div className="firstSection">
        <div className="left">
          <div className="categories">Categories</div>
          <div className="categoryImageWrapper">
            <div className="one">1</div>
            <div className="two">2</div>
            <div className="three">3</div>
          </div>
        </div>
        <div className="right">Tech</div>
      </div>
    </div>
  );
}
