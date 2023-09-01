import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PasswordGenForm from "./PasswordGenForm";
import "@testing-library/jest-dom/extend-expect";

describe("PasswordGenForm Component", () => {
  it("renders the form with all required elements", () => {
    const { getByText } = render(<PasswordGenForm />);
    expect(getByText("Password Generator")).toBeInTheDocument();
    expect(getByText("Generate password in a seconds")).toBeInTheDocument();
    expect(getByText("Password Length: 8")).toBeInTheDocument();
    expect(getByText("Generate")).toBeInTheDocument();
  });

  it("copies the password when 'Copy' button is clicked", async () => {
    const { container } = render(<PasswordGenForm />);
    const copyButton = container.getElementsByClassName(
      "password-gen-copy-icon"
    )[0];
    fireEvent.click(copyButton);
  });
});
