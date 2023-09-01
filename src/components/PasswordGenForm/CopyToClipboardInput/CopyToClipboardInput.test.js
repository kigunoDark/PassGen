import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CopyToClipboardInput from "./CopyToClipboardInput";

global.navigator.clipboard = {
  writeText: jest.fn(),
};

test("renders the CopyToClipboardInput component", () => {
  const passwordInputRef = {
    current: document.createElement("input"),
  };
  const generatedPassword = "MyPassword123";
  const copyPassword = jest.fn();

  const { getByPlaceholderText, getByTestId } = render(
    <CopyToClipboardInput
      passwordInputRef={passwordInputRef}
      generatedPassword={generatedPassword}
      copyPassword={copyPassword}
    />
  );

  const inputField = getByPlaceholderText("Generate password");
  expect(inputField).toHaveValue(generatedPassword);

  const copyButton = getByTestId("copy-button");
  fireEvent.click(copyButton);
  expect(copyPassword).toHaveBeenCalledTimes(1);
});
