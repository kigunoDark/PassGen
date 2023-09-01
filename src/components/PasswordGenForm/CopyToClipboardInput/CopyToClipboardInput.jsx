/**
 * A React component that displays a password input field and a "Copy" button.
 *
 * This component renders an input field with a generated password and a "Copy" button
 * that allows users to copy the password to the clipboard.
 *
 * @component
 *
 * @param {object} props - The component's properties.
 * @param {React.RefObject<HTMLInputElement>} props.passwordInputRef - A reference to the password input element.
 * @param {string} props.generatedPassword - The generated password to display in the input field.
 * @param {function} props.copyPassword - A function to copy the password to the clipboard when the "Copy" button is clicked.
 *
 * @returns {React.ReactElement} The rendered component.
 *
 * @example
 * // Usage of CopyToClipboardInput component:
 * <CopyToClipboardInput
 *   passwordInputRef={passwordInputRef}
 *   generatedPassword="MyPassword123"
 *   copyPassword={handleCopyPassword}
 * />
 */

import React from "react";
import PropTypes from "prop-types";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./CopyToClipboardInput.scss";

function CopyToClipboardInput({
  passwordInputRef,
  generatedPassword,
  copyPassword,
}) {
  return (
    <div className="password-gen-input">
      <input
        type="text"
        ref={passwordInputRef}
        id="password-input"
        value={generatedPassword}
        placeholder="Generate password"
        readOnly
      />
      <FontAwesomeIcon
        data-testid="copy-button"
        className="password-gen-copy-icon"
        icon={faCopy}
        onClick={copyPassword}
      />
    </div>
  );
}

CopyToClipboardInput.propTypes = {
  passwordInputRef: PropTypes.object.isRequired,
  generatedPassword: PropTypes.string.isRequired,
  copyPassword: PropTypes.func.isRequired,
};

export default React.memo(CopyToClipboardInput);
