import React, { Component } from "react";
import Input from "../../Custom/Input/Input";
import { auth, createUserProfile, storage } from "../../Firebase/firebase";
import SignUpScene from "../../Custom/Images/SIGN_UP_SCENE.svg";
import "./SignUp.scss";

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }); //very important part
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword, url } = this.state;
    if (!(password === confirmPassword)) {
      alert("Password Mismatch");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      user.updateProfile({ displayName: displayName });
      console.log(user);
    } catch (err) {
      console.log("the error in profile doc creation is", err);
    }
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="SignUp">
        <div className="signUpLeft">
          <div className="authBox">
            <h3 className="signup">Sign Up</h3>
            <form>
              <Input
                content={"Name"}
                type={"email"}
                onChange={this.handleInput}
                name="displayName"
                value={displayName}
              />
              <Input
                content={"Email"}
                type={"email"}
                onChange={this.handleInput}
                name="email"
                value={email}
              />
              <Input
                content={"Password"}
                type={"password"}
                onChange={this.handleInput}
                name="password"
                value={password}
              />
              <Input
                content={" Confirm Password"}
                type={"password"}
                onChange={this.handleInput}
                name="confirmPassword"
                value={confirmPassword}
              />
            </form>
            <div className="agreement">
              <p>
                Creating an account means you agree with our{" "}
                <a href="/#">Privacy & Terms of Service</a> and{" "}
                <a href="/#"> and Default Notifcation Settings</a> apply
              </p>
            </div>
            <div className="buttonWrapper signUpButton">
              <button className="reservationButton" onClick={this.handleSubmit}>
                Create Account
              </button>
              <button
                className="reservationButton hideMe"
                onClick={this.handleSubmit}
              >
                Create Account
              </button>
              <div className="interesting"></div>
            </div>
            <div className="agreement">
              <p>
                This site isnt protected by reCaptcha and the google{" "}
                <a href="/#">Privacy</a> and <a href="/#">Terms of Service</a>{" "}
                apply
              </p>
              <p>
                Already a member? <a href="/#">Sign In</a>
              </p>
            </div>
          </div>
        </div>
        <div className="signUpRight">
          <p>Discover the world top Black Women and Creatives</p>
          <img src={SignUpScene} alt="SignUp" />
        </div>
      </div>
    );
  }
}
export default SignUp;
