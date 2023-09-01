import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CheckboxMenu from "./CheckboxMenu";

test("renders CheckboxMenu and handles checkbox change", () => {
    const label = "Include Lowercase";
    const isChecked = true;
    const onCheckboxChange = jest.fn();

    const { getByText, getByRole } = render(
        <CheckboxMenu label={label} isChecked={isChecked} onCheckboxChange={onCheckboxChange} />
    );

    const checkboxLabel = getByText(label);
    const checkbox = getByRole("checkbox");


    expect(checkboxLabel).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute("checked");

    fireEvent.click(checkbox);

    expect(onCheckboxChange).toHaveBeenCalledTimes(1);
    expect(onCheckboxChange).toHaveBeenCalledWith(expect.any(Object));
});
