import React from "react";
import "../styles/InputField.css";

function InputField({ type, placeholder }) {
  return (
    <input
      type={type}
      className="input-field"
      placeholder={placeholder}
    />
  );
}

export default InputField;
