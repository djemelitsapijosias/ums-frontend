import React, { useState, useContext } from "react";
import InputField from "./InputField";
import LoginButton from "./LoginButton";
import Divider from "./Divider";
import Select from "./SelectButton";
import "../styles/LoginBox.css";
import SVGimage from "../assets/SVGimage.svg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function RegisterBox() {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

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

  const [step, setStep] = useState(1);
  const [err, setErr] = useState("");
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  // Validate current step fields
  const validateStep = () => {
    setErr("");
    if (step === 1) {
      if (!formData.fullName || !formData.contact || !formData.email) {
        setErr("Please fill all fields in Step 1");
        return false;
      }
    } else if (step === 2) {
      if (!formData.dob || !formData.pob || !formData.sex) {
        setErr("Please fill all fields in Step 2");
        return false;
      }
    } else if (step === 3) {
      if (
        !formData.role ||
        !formData.username ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        setErr("Please fill all fields in Step 3");
        return false;
      }
      if (formData.password !== formData.confirmPassword) {
        setErr("Passwords do not match");
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) setStep(step + 1);
  };
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    try {
      const user = await register(formData);
      console.log("Registered user:", user);
      navigate("/dashboard");
    } catch (error) {
      setErr(
        error.response?.data?.message || error.message || "Registration failed"
      );
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="left-section">
          <img src={SVGimage} alt="Welcome Image" />
        </div>
        <div className="middle-section"></div>
        <div className="right-section">
          <div className="login-box">
            <h1 className="logo">Register Now!</h1>
            <form onSubmit={handleSubmit}>
              {/* Step 1 */}
              {step === 1 && (
                <>
                  <InputField
                    type="text"
                    placeholder="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  <InputField
                    type="text"
                    placeholder="+237 6XX XX XX XX"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                  />
                  <InputField
                    type="email"
                    placeholder="Email"
                    required
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
                    placeholder="Date of Birth"
                    required
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                  />
                  <InputField
                    type="text"
                    placeholder="Place of Birth"
                    required
                    name="pob"
                    value={formData.pob}
                    onChange={handleChange}
                  />
                  <Select
                    name="sex"
                    required
                    options={options}
                    value={formData.sex}
                    onChange={(value) => handleSelectChange("sex", value)}
                  />
                  <div className="button-group">
                    <button
                      type="button"
                      className="btn secondary"
                      onClick={prevStep}
                    >
                      Previous
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
                    required
                    options={options2}
                    value={formData.role}
                    onChange={(value) => handleSelectChange("role", value)}
                  />
                  <InputField
                    type="text"
                    placeholder="Username"
                    required
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                  <InputField
                    type="password"
                    placeholder="Enter Password"
                    required
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <InputField
                    type="password"
                    placeholder="Confirm Password"
                    required
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  <div className="button-group">
                    <button
                      type="button"
                      className="btn secondary"
                      onClick={prevStep}
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
                      className="btn primary"
                    >
                      Register
                    </button>
                    
                  </div>
                </>
              )}

              {err && (
                <div style={{ color: "red", marginTop: "10px" }}>{err}</div>
              )}
              <Divider />
            </form>

            <p>
              Already have an account?{" "}
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

export default RegisterBox;
