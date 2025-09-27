import React, { useState, useContext } from "react";
import InputField from "./InputField";
import LoginButton from "./LoginButton";
import Divider from "./Divider";
import "../styles/LoginBox.css";
import SVGimage from "../assets/SVGimage.svg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Footer from "./Footer";
import Swal from "sweetalert2";

function LoginBox() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await login(email, password);
      console.log("user id:", user.id);

      // ✅ Success popup
      Swal.fire({
        icon: "success",
        title: "Login Successful 🎉",
        text: `Welcome back, ${user.fullName || user.username || "User"}!`,
        timer: 2000,
        showConfirmButton: false,
      });

      navigate("/dashboard"); // protected route
    } catch (error) {
      // ❌ Error popup
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text:
          error.response?.data?.message ||
          error.message ||
          "Invalid credentials. Try again.",
        confirmButtonColor: "#e74c3c",
      });
    }
  };

  return (
    <div>
      <div className="login-page">
        <div className="login-container">
          <div className="left-section">
            <img src={SVGimage} alt="Welcome" />
          </div>
          <div className="middle-section"></div>
          <div className="right-section">
            <div className="login-box">
              <h1 className="logo">Welcome!</h1>
              <form onSubmit={handleSubmit}>
                <InputField
                  type="text"
                  placeholder="Enter Your Email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputField
                  type="password"
                  placeholder="Password"
                  required
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <LoginButton text="Log in" type="submit" />
              </form>
              <Divider text={"OR"}></Divider>
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
      <Footer />
    </div>
  );
}

export default LoginBox;
