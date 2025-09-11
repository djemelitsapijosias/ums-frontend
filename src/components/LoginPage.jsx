import React, { useState, useMemo } from "react";
import SVGimage from "../assets/SVGimage.svg";
import "../styles/LoginPage.css"; // import the CSS file

/* ---------- Small reusable components ---------- */

const TextInput = ({
  id,
  icon,
  type = "text",
  placeholder,
  value,
  onChange,
}) => (
  <label htmlFor={id} className="input-label">
    <div className="input-container">
      <span className="input-icon">{icon}</span>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field"
        aria-label={placeholder}
      />
    </div>
  </label>
);

const PasswordStrength = ({ score = 0 }) => {
  const bars = [0, 1, 2];
  return (
    <div className="password-strength">
      <div className="password-label">Password strength</div>
      <div className="bars">
        {bars.map((i) => (
          <div
            key={i}
            className={`bar ${i < score ? `score-${score}` : "empty"}`}
          />
        ))}
      </div>
    </div>
  );
};

/* --- Icons --- */
const IconUser = () => <span>👤</span>;
const IconMail = () => <span>📧</span>;
const IconLock = () => <span>🔒</span>;

const Button = ({
  children,
  variant = "primary",
  onClick,
  type = "button",
}) => (
  <button type={type} onClick={onClick} className={`btn ${variant}`}>
    {children}
  </button>
);


/* ---------- Page component + form logic ---------- */
export default function LoginPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordScore = useMemo(() => {
    let score = 0;
    if (password.length > 6) score++;
    if (/[A-Z]/.test(password) && /[0-9]/.test(password)) score++;
    if (password.length > 6 && /[^A-Za-z0-9]/.test(password)) score++;
    return score;
  }, [password]);

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left illustration */}
        <div className="left-section">
          <img src={SVGimage} alt="Phone illustration" />
        </div>

        {/* Right form */}
        <div className="right-section">
          <h1 className="welcome-title">Welcome!</h1>

          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted!");
            }}
          >
            <TextInput
              id="name"
              icon={<IconUser />}
              placeholder="user name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextInput
              id="email"
              icon={<IconMail />}
              type="email"
              placeholder="Your e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div>
              <div className="input-container">
                <span className="input-icon">
                  <IconLock />
                </span>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field"
                />
              </div>
              <PasswordStrength score={passwordScore} />
            </div>

            <div className="button-group">
              <Button variant="primary">Create account</Button>
              <Button type="submit" variant="outline">
                Log in
              </Button>
            </div>
          </form>
          <div className="password-tip">
            Use a strong password with letters, numbers and symbols for better
            security.
          </div>
        </div>
      </div>
    </div>
  );
}
