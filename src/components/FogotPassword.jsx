import React from "react";
import "../styles/LoginBox.css";
import InputField from "./InputField";
import LoginButton from "./LoginButton";
import { Link } from "react-router-dom";
function message() {
  return (
    <div className="login-page">
      <div className="login-box" style={{ color: "WHITE" }}>
        <form action="">
        <h1>Reset Password!</h1>
        <InputField
        type="email"
        name="email"
        placeholder="Enter your email"
        required="true"
        />
        <Link to="/">
        <LoginButton  text={"Send"}/>
        </Link>
        </form>
      </div>
    </div>
  );
}

export default message;
