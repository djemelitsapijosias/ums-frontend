import React from "react";
import "../styles/InputField.css";

function InputField({ type, placeholder, name, value, onChange, required }) {
  return (
    <input
      type={type}
      className="input-field"
      placeholder={placeholder}
      name={name}
      value={value}         // bind value from parent
      onChange={onChange}   // call parent's handleChange
      required={required}   // optional HTML validation
    />
  );
}

export default InputField;
