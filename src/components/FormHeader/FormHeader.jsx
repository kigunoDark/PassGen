/**
 * A React component for rendering a header with a title and subtitle.
 *
 * This component displays a header with a title and an optional subtitle.
 *
 * @component
 *
 * @param {object} props - The component's properties.
 * @param {string} props.title - The title to display in the header.
 * @param {string} [props.subtitle] - An optional subtitle to display below the title.
 *
 * @returns {React.ReactElement} The rendered component.
 *
 * @example
 * // Usage of FormHeader component with a subtitle:
 * <FormHeader
 *   title="Password Generator"
 *   subtitle="Generate secure passwords with ease"
 * />
 *
 * // Usage of FormHeader component without a subtitle:
 * <FormHeader title="Password Generator" />
 */

import React from "react";
import PropTypes from "prop-types";
import "./FormHeader.scss";

function FormHeader({ title, subtitle }) {
  return (
    <div className="password-gen-header">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

FormHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default FormHeader;
