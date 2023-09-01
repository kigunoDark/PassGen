import { useEffect, useState } from "react";
import CheckboxMenu from "../CheckboxMenu/CheckboxMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import FormHeader from "../FormHeader/FormHeader";
import CustomInputRange from "../CustomInputRange/CustomInputRange";
import passwordGenerator from "./PasswordGenForm.helpers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./PasswordGenForm.scss";

function PasswordGenForm() {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [isIncludeLowercase, setIsIncludeLowerCase] = useState(false);
  const [isIncludeUppercase, setIsIncludeUppercase] = useState(false);
  const [isIncludeNumbers, setIsIncludeNumbers] = useState(false);
  const [isIncludeSymbols, setIsIncludeSymbols] = useState(false);
  const [passwordLength, setPasswordLength] = useState(8);
  const [error, setError] = useState("");

  const submitGeneratePassword = () => {
    setError({});
    const password = passwordGenerator(
      isIncludeUppercase,
      isIncludeLowercase,
      isIncludeNumbers,
      isIncludeSymbols,
      setError,
      passwordLength
    );
    setGeneratedPassword(password);
    if (password) toast.success("The password has been generated");
  };

  const copyPassword = () => {
    const passwordInput = document.getElementById("password-input");
    passwordInput.select();
    document.execCommand("copy");
    toast.success("You have copied the password successfully");
  };

  const handleIncludeLowercaseChange = () => {
    setIsIncludeLowerCase(!isIncludeLowercase);
  };

  const handleIncludeUppercaseChange = () => {
    setIsIncludeUppercase(!isIncludeUppercase);
  };

  const handleIsIncludeNumbers = () => {
    setIsIncludeNumbers(!isIncludeNumbers);
  };

  const handleIncludeSymbolsChange = () => {
    setIsIncludeSymbols(!isIncludeSymbols);
  };

  const handlePasswordLengthChange = (event) => {
    setPasswordLength(parseInt(event.target.value));
  };

  useEffect(() => {
    if (error.length) toast.error(error);
    setError("");
  }, [error]);

  const CHECKBOX_MENU_LIST = [
    {
      label: "Include Lowercase",
      isChecked: isIncludeLowercase,
      onCheckboxChange: handleIncludeLowercaseChange,
    },
    {
      label: "Include Uppercase",
      isChecked: isIncludeUppercase,
      onCheckboxChange: handleIncludeUppercaseChange,
    },
    {
      label: "Include Numbers",
      isChecked: isIncludeNumbers,
      onCheckboxChange: handleIsIncludeNumbers,
    },
    {
      label: "Include Symbols",
      isChecked: isIncludeSymbols,
      onCheckboxChange: handleIncludeSymbolsChange,
    },
  ];

  return (
    <div className="password-gen-plane">
      <FormHeader
        title={"Password Generator"}
        subtitle={"Generate password in a seconds"}
      />

      <div className="password-gen-input">
        <input
          type="text"
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

      <CustomInputRange
        min={4}
        max={20}
        value={passwordLength}
        onChange={handlePasswordLengthChange}
        label={`Password Length: ${passwordLength}`}
      />

      <div className="password-gen-block">
        {CHECKBOX_MENU_LIST.map((checkboxMenuItem) => (
          <CheckboxMenu
            label={checkboxMenuItem.label}
            isChecked={checkboxMenuItem.isChecked}
            onCheckboxChange={checkboxMenuItem.onCheckboxChange}
          />
        ))}
      </div>

      <button className="password-gen-button" onClick={submitGeneratePassword}>
        Generate
      </button>
    </div>
  );
}

export default PasswordGenForm;