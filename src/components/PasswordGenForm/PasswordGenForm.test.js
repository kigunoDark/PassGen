import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PasswordGenForm from "./PasswordGenForm";

describe("PasswordGenForm Component", () => {
  it("renders the form with all required elements", () => {
    const { getByText } = render(<PasswordGenForm />);
    expect(getByText("Password Generator")).toBeInTheDocument();
    expect(getByText("Generate password in a seconds")).toBeInTheDocument();
    expect(getByText("Password Length: 8")).toBeInTheDocument();
    expect(getByText("Generate")).toBeInTheDocument();
  });

  it("copies the password when 'Copy' button is clicked", async () => {
    const { getByTestId } = render(<PasswordGenForm />);
    const copyButton = getByTestId("copy-button");
    fireEvent.click(copyButton);
  });
});
