import React from "react";
import Input from "../../Custom/Input/Input";

export default function SignUp() {
  return (
    <div>
      <div className="signup"></div>
      <form>
        <Input content={"Email"} type={"email"} />
        <Input content={"password"} type={"password"} />
        <button className="reservationButton"> Sign in with Google</button>
        <button className="reservationButton">Sign In </button>
      </form>
    </div>
  );
}
