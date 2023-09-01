import React from "react";
import PropTypes from "prop-types";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./PasswordGenInput.scss";

function PasswordGenInput({
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
        className="password-gen-copy-icon"
        icon={faCopy}
        onClick={copyPassword}
      />
    </div>
  );
}

PasswordGenInput.propTypes = {
  passwordInputRef: PropTypes.object.isRequired,
  generatedPassword: PropTypes.string.isRequired,
  copyPassword: PropTypes.func.isRequired,
};

export default React.memo(PasswordGenInput);
