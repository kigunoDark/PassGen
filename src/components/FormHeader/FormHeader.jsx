import React from "react";
import PropTypes from "prop-types";
import "./FormHeader.scss";

function FormHeader({ title, subtitle }) {
  return (
    <div className="password-gen-header">
      <h2 className="password-gen-title">{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

FormHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default FormHeader;
