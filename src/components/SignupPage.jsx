import React, { useState } from "react";
import "../styles/SignupPage.css"; // custom styles
import SVGimage from "../assets/SVGimage.svg";
import { Link } from "react-router-dom";

function SignupPage() {
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

  // Handle final submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Registration Successful!");
  };

  return (
    <div className="signup-container">
      {/* Left side image */}
      <div className="signup-image">
        <img src={SVGimage} alt="Welcome" />
      </div>
      
      {/* Signup form */}

      <div className="signup-form">
        <h2 className="title">Create Account</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Step 1 */}
          {step === 1 && (
            <>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Contact / Phone Number</label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="button-group">
                <button type="button" className="btn secondary">
                  <Link to="/LoginBox" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Login
                  </Link>
                </button>
                <button type="button" className="btn primary" onClick={nextStep}>
                  Next
                </button>
              </div>
            </>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <>
              <div className="form-group">
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Place of Birth</label>
                <input
                  type="text"
                  name="pob"
                  value={formData.pob}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Sex</label>
                <select
                  name="sex"
                  value={formData.sex}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="button-group">
                <button type="button" className="btn secondary" onClick={prevStep}>
                  Previous
                </button>
                <button type="button" className="btn primary" onClick={nextStep}>
                  Next
                </button>
              </div>
            </>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <>
              <div className="form-group">
                <label>Role</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Role</option>
                  <option value="Admin">Admin</option>
                  <option value="Student">Student</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="button-group">
                <button type="button" className="btn secondary" onClick={prevStep}>
                  Previous
                </button>
                <button type="submit" className="btn primary">
                  Register
                </button>
              </div>
            </>
          )}
        </form>
      </div>

      
    </div>
  );
}

export default SignupPage;
