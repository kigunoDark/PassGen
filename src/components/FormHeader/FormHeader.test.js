import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FormHeader from "./FormHeader";

test("renders FormHeader with title and subtitle", () => {
  const title = "Password Generator";
  const subtitle = "Generate password in a seconds";

  const { getByText } = render(
    <FormHeader title={title} subtitle={subtitle} />
  );

  const titleElement = getByText(title);
  const subtitleElement = getByText(subtitle);

  expect(titleElement).toBeInTheDocument();
  expect(subtitleElement).toBeInTheDocument();
});

test("renders FormHeader without subtitle", () => {
  const title = "Password Generator";

  const { getByText, queryByText } = render(<FormHeader title={title} />);

  const titleElement = getByText(title);
  const subtitleElement = queryByText("Generate password in a seconds");

  expect(titleElement).toBeInTheDocument();
  expect(subtitleElement).toBeNull();
});
