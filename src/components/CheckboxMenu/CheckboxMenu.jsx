/**
 * A React component for rendering a checkbox with a label.
 *
 * This component displays a checkbox input with an associated label and an optional checkmark icon.
 *
 * @component
 *
 * @param {object} props - The component's properties.
 * @param {string} props.label - The label text to display.
 * @param {boolean} props.isChecked - Indicates whether the checkbox is checked.
 * @param {function} props.onCheckboxChange - A function to handle changes to the checkbox state.
 *
 * @returns {React.ReactElement} The rendered component.
 *
 * @example
 * // Usage of CheckboxMenu component:
 * <CheckboxMenu
 *   label="Include Lowercase"
 *   isChecked={isIncludeLowercase}
 *   onCheckboxChange={handleIncludeLowercaseChange}
 * />
 */

import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./CheckboxMenu.scss";

function CheckboxMenu({ label, isChecked, onCheckboxChange }) {
  return (
    <label className="checkbox-container">
      <input type="checkbox" checked={isChecked} onChange={onCheckboxChange} />
      <span className="checkmark">
        {isChecked && (
          <FontAwesomeIcon className="checkbox-icon" icon={faCheck} />
        )}
      </span>
      {label}
    </label>
  );
}

CheckboxMenu.propTypes = {
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
};

export default CheckboxMenu;
