/**
 * A React component for displaying a custom input range with a label.
 *
 * This component renders an input range with specified minimum and maximum values,
 * a current value, and a label.
 *
 * @component
 *
 * @param {object} props - The component's properties.
 * @param {number} props.min - The minimum value of the input range.
 * @param {number} props.max - The maximum value of the input range.
 * @param {number} props.value - The current value of the input range.
 * @param {function} props.onChange - A function to handle changes to the input range value.
 * @param {string} props.label - The label to display alongside the input range.
 *
 * @returns {React.ReactElement} The rendered component.
 *
 * @example
 * // Usage of CustomInputRange component:
 * <CustomInputRange
 *   min={4}
 *   max={20}
 *   value={8}
 *   onChange={handleInputChange}
 *   label="Password Length: 8"
 * />
 */

import React from "react";
import PropTypes from "prop-types";
import "./CustomInputRange.scss";

function CustomInputRange({ min, max, value, onChange, label }) {
  return (
    <div className="password-gen-length-input">
      <input
        data-testid="range-input"
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
