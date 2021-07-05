import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import IrregularVerbsComponent from "./IrregularVerbsComponent";

test("renders IrregularVerbsComp", () => {
  const { getByText } = render(<IrregularVerbsComponent />);
  const title = getByText("List of Irregular Verbs");
  expect(title).toBeInTheDocument();
});

test("fillTheGap text", () => {
  const { getByText } = render(<IrregularVerbsComponent />);

  let fillTheGapBtn = getByText("start filling the gap");
  expect(fillTheGapBtn).toBeInTheDocument();

  fireEvent.click(fillTheGapBtn);
  expect(fillTheGapBtn.textContent).toBe("stop filling the gap");
});
