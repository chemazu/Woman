import React from "react";
import scene from "../../Custom/Images/SCENE.svg";
import Input from "../../Custom/Input/Input";
import { signInWithGoogle } from "../../Firebase/firebase";

import "./SignIn.scss";

export default function SignIn() {
  return (
    <div className="SignIn">
      <div className="signInLeft">
        <p>&nbsp;</p>
        <h3>Welcome to Quay</h3>
        <p>Join and Discover the most interesting lorem ipsum </p>
        <img src={scene} alt="scene" />

        <p>Find a cause you support that celebrates the black woman</p>
        <p></p>
      </div>
      <div className="signInRight">
        <div className="signInBox">
          <h3>Sign In</h3>
          <form>
            <Input content={"Email"} type={"email"} />
            <Input content={"password"} type={"password"} />
            <div className="buttonWrapper">
              <button className="reservationButton">Sign In </button>
              <p>&nbsp;</p>
              <button className="reservationButton" onClick={signInWithGoogle}>
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
        <p>Forgotten your password? </p>
        <p>
          Don't have an account? <a href="/#">Register</a>
        </p>
      </div>
    </div>
  );
}
