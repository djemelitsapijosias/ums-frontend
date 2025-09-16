import React from "react";
import "../styles/InputField.css";

function InputField({ type, placeholder, required, name }) {
  return (
    <input
      type={type}
      className="input-field"
      placeholder={placeholder}
      required={required}
      name={name}
    />
  );
}

export default InputField;
