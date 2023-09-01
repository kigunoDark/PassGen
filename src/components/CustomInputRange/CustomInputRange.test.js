import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CustomInputRange from "./CustomInputRange";

test("renders input in CustomInputRange", () => {
  const min = 4;
  const max = 20;
  const value = 10;
  const label = "Password Length: 10";

  const { getByTestId } = render(
    <CustomInputRange min={min} max={max} value={value} label={label} />
  );

  const rangeInput = getByTestId("range-input");

  expect(rangeInput).toBeInTheDocument();
  expect(rangeInput).toHaveAttribute("type", "range");
  expect(rangeInput).toHaveAttribute("min", min.toString());
  expect(rangeInput).toHaveAttribute("max", max.toString());
  expect(rangeInput).toHaveAttribute("value", value.toString());
});
