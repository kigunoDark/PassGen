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
