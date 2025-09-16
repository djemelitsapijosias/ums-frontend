import React from "react";
import InputField from "./InputField";
import LoginButton from "./LoginButton";
import Divider from "./Divider";
import "../styles/LoginBox.css";
import SVGimage from "../assets/SVGimage.svg";
import { Link } from "react-router-dom";


function LoginBox() {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="left-section">
          <img src={SVGimage} alt="Welcome" />
        </div>

        <div className="middle-section">
        </div>
        {/* Right form */}
        <div className="right-section">
          <div className="login-box">
            <h1 className="logo">Welcome !</h1>
            <InputField
              type="text"
              placeholder="Phone number, username, or email"
            />
            <InputField type="password" placeholder="Password" />
            <LoginButton text="Log in" />

            <Divider />

            <a href="https://ums.com" className="forgot-link">
              Forgot password?
            </a>
          </div>
          <hr />
          <div className="login-box">
            <p>
              Don’t have an account? <Link to="/SignupPage" className="fb-login">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginBox;
