import React, { useState } from "react";
import InputField from "./InputField";
import LoginButton from "./LoginButton";
import Divider from "./Divider";
import Select from "./SelectButton";
import "../styles/LoginBox.css";
import SVGimage from "../assets/SVGimage.svg";
import Loginform from "./LoginBox";
import { Link } from "react-router-dom";

function LoginBox() {
  //select options
  const [selectedValue, setSelectedValue] = useState("");

  const options = [
    { placeholder: "Sex", value: "" },
    { placeholder: "Male", value: "M" },
    { placeholder: "Female", value: "F" },
    { placeholder: "Other", value: "O" },
  ];

  const options2 = [
    { placeholder: "Role", value: "" },
    { placeholder: "Admin", value: "admin" },
    { placeholder: "Student", value: "Student" },
    { placeholder: "Secretory", value: "Secretory" },
  ];

  // Track the current step
  const [step, setStep] = useState(1);

  // Store form data
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    email: "",
    dob: "",
    pob: "",
    sex: "",
    role: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle navigation
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="left-section">
          <img src={SVGimage} alt="Welcome Image" />
        </div>

        {/* Middle Section */}
        <div className="middle-section"></div>

        {/* Right form */}
        <div className="right-section">
          <div className="login-box">
            <h1 className="logo">Register Now!</h1>

            <form>
              {/* Step 1 */}
              {step === 1 && (
                <>
                  <InputField
                    type="text"
                    placeholder="Full Name"
                    required="true"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  <InputField
                    type="text"
                    placeholder="+237 6XX XX XX XX"
                    required="true"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                  />
                  <InputField
                    type="email"
                    placeholder="email"
                    required="true"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <div className="button-group">
                    <button type="button" className="btn secondary">
                      <Link to="/" className="fb-login">
                        Back
                      </Link>
                    </button>
                    <button
                      type="button"
                      className="btn primary"
                      onClick={nextStep}
                    >
                      Next
                    </button>
                  </div>
                </>
              )}
              {/* Step 2 */}
              {step === 2 && (
                <>
                  <InputField
                    type="date"
                    placeholder="date of birth"
                    required="true"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                  />
                  <InputField
                    type="text"
                    placeholder="Place of Birth"
                    required="true"
                    name="pob"
                    value={formData.pob}
                    onChange={handleChange}
                  />
                  <Select
                    name="sex"
                    required="true"
                    options={options}
                    value={formData.selectedValue}
                    onChange={setSelectedValue}
                  />
                  <div className="button-group">
                    <button
                      type="button"
                      className="btn secondary"
                      onClick={prevStep}
                    >
                      <span className="fb-login">Previous</span>
                    </button>
                    <button
                      type="button"
                      className="btn primary"
                      onClick={nextStep}
                    >
                      Next
                    </button>
                  </div>
                </>
              )}
              {/* Step 3 */}
              {step === 3 && (
                <>
                  <Select
                    name="role"
                    required="true"
                    options={options2}
                    value={formData.selectedValue}
                    onChange={setSelectedValue}
                  />
                  <InputField
                    type="password"
                    placeholder="Enter Password"
                    required="true"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />

                  <InputField
                    type="password"
                    placeholder="Confirm Password"
                    required="true"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />

                  <div className="button-group">
                    <button
                      type="button"
                      className="btn secondary"
                      onClick={prevStep}
                    >
                      <span className="fb-login">Previous</span>
                    </button>
                    <button type="submit" className="btn primary">
                      Register
                    </button>
                  </div>
                </>
              )}

              <Divider />
            </form>
            <p>
              already have an account?{" "}
              <Link to="/" className="fb-login">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginBox;
