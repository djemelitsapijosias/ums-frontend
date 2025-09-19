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
        <div className="middle-section"></div>
        {/* Right form */}
        <div className="right-section">
          <div className="login-box">
            <h1 className="logo">Welcome !</h1>
            <form action="">
              <InputField
                type="text"
                placeholder="Phone number, username, or email"
                required="true"
                name="email"
              />
              <InputField
                type="password"
                placeholder="Password"
                required="true"
                name="Password"
              />
              <Link to="/dashboard">
                <LoginButton text="Log in" />
              </Link>
            </form>
            <Divider />
            <Link to="/FogotPassword" className="forgot-link">
              Forgot password?
            </Link>
          </div>
          <hr />
          <div className="login-box">
            <p>
              Don’t have an account?{" "}
              <Link to="/signup" className="fb-login">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginBox;
