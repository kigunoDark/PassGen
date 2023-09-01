import { useEffect, useState, useRef } from "react";
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
  const [isIncludeLowercase, setIsIncludeLowerCase] = useState(true);
  const [isIncludeUppercase, setIsIncludeUppercase] = useState(false);
  const [isIncludeNumbers, setIsIncludeNumbers] = useState(false);
  const [isIncludeSymbols, setIsIncludeSymbols] = useState(false);
  const [passwordLength, setPasswordLength] = useState(8);
  const passwordInputRef = useRef(null);
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

  const copyPassword = async () => {
    const passwordInput = passwordInputRef.current;
    if (passwordInput) {
      try {
        await navigator.clipboard.writeText(passwordInput.value);
        toast.success("You have copied the password successfully");
      } catch (err) {
        toast.error("Failed to copy password:", err);
      }
    }
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
      id: 1,
      label: "Include Lowercase",
      isChecked: isIncludeLowercase,
      onCheckboxChange: handleIncludeLowercaseChange,
    },
    {
      id: 2,
      label: "Include Uppercase",
      isChecked: isIncludeUppercase,
      onCheckboxChange: handleIncludeUppercaseChange,
    },
    {
      id: 3,
      label: "Include Numbers",
      isChecked: isIncludeNumbers,
      onCheckboxChange: handleIsIncludeNumbers,
    },
    {
      id: 4,
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
            key={checkboxMenuItem.id}
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
