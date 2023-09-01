/**
 * React component for generating passwords and copying them to the clipboard.
 *
 * @component
 * @example
 * // Usage of PasswordGenForm component:
 * <PasswordGenForm />
 */

import React from 'react';
import { useState, useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import FormHeader from "../FormHeader/FormHeader";
import CheckboxMenu from "../CheckboxMenu/CheckboxMenu";
import CustomInputRange from "../CustomInputRange/CustomInputRange";
import generatePassword from "./PasswordGenForm.helpers";
import PasswordGenInput from "./CopyToClipboardInput/CopyToClipboardInput";

import "./PasswordGenForm.scss";

function PasswordGenForm() {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [isIncludeLowercase, setIsIncludeLowerCase] = useState(true);
  const [isIncludeUppercase, setIsIncludeUppercase] = useState(false);
  const [isIncludeNumbers, setIsIncludeNumbers] = useState(false);
  const [isIncludeSymbols, setIsIncludeSymbols] = useState(false);
  const [passwordLength, setPasswordLength] = useState(8);
  const passwordInputRef = useRef(null);

  const submitGeneratePassword = (event) => {
    event.preventDefault();
    try {
      const password = generatePassword({
        passwordLength,
        isIncludeUppercase,
        isIncludeLowercase,
        isIncludeNumbers,
        isIncludeSymbols,
      });
      setGeneratedPassword(password);
      toast.success("The password has been generated");
    } catch (error) {
      toast.error(error.message);
    }
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

  const handleIncludeLowercaseChange = () =>
    setIsIncludeLowerCase(!isIncludeLowercase);

  const handleIncludeUppercaseChange = () =>
    setIsIncludeUppercase(!isIncludeUppercase);

  const handleIsIncludeNumbers = () => setIsIncludeNumbers(!isIncludeNumbers);

  const handleIncludeSymbolsChange = () =>
    setIsIncludeSymbols(!isIncludeSymbols);

  const handlePasswordLengthChange = (event) =>
    setPasswordLength(parseInt(event.target.value));

  const checkbox_menu_list = [
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
    <form className="password-gen-plane" onSubmit={submitGeneratePassword}>
      <FormHeader
        title={"Password Generator"}
        subtitle={"Generate password in a seconds"}
      />

      <PasswordGenInput
        passwordInputRef={passwordInputRef}
        generatedPassword={generatedPassword}
        copyPassword={copyPassword}
      />

      <CustomInputRange
        min={4}
        max={20}
        value={passwordLength}
        label={`Password Length: ${passwordLength}`}
        onChange={handlePasswordLengthChange}
      />

      <div className="password-gen-block">
        {checkbox_menu_list.map((checkboxMenuItem) => (
          <CheckboxMenu
            key={checkboxMenuItem.id}
            label={checkboxMenuItem.label}
            isChecked={checkboxMenuItem.isChecked}
            onCheckboxChange={checkboxMenuItem.onCheckboxChange}
          />
        ))}
      </div>

      <button className="password-gen-button" type="submit">
        Generate
      </button>
    </form>
  );
}

export default PasswordGenForm;
