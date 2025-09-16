// Select.jsx
import React from "react";
import "../styles/SelectButton.css";

function Select({options, value, onChange, name, required }) {
  return (
    <div>
      <select className="select-container" value={value} name={name} required={required} onChange={(e) => onChange(e.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.placeholder}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
