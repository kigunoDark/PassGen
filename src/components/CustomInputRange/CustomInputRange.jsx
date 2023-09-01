import React from "react";
import PropTypes from "prop-types";
import "./CustomInputRange.scss";

function CustomInputRange({ min, max, value, onChange, label }) {
  return (
    <div className="password-gen-length-input">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
      <p>{label}</p>
    </div>
  );
}

CustomInputRange.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default CustomInputRange;
