import React from "react";
import Input from "../Input/Input";
import "./Subscribe.scss";

export default function Subscribe() {
  return (
    <div className="Subscribe">
      <div className="subscribeLeft">
        <h2>Enjoy what we offer ?</h2>
        <p>
          Join our mailing list, sign up to be the first to receive special news
          and event updates from Quay.
        </p>
      </div>
      <div className="subscribeRight">
        <form
          className="subscribeForm"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("submit");
          }}
        >
          <Input content={"Enter your Email"} type={"email"} />
          <button className="reservationButton" type="Submit">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
