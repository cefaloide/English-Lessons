import React from "react";
import { fireEvent, render } from "@testing-library/react";
import IrregularVerbsComponent from "./IrregularVerbsComponent";

describe("<IrregularVerbsComponent />", () => {
  let component;

  beforeEach(() => {
    component = render(<IrregularVerbsComponent />);
  });

  test("renders", () => {
    const { getByText } = component;
    const title = getByText("List of Irregular Verbs");
    expect(title).toBeInTheDocument();
  });

  test("fillTheGap text", () => {
    const { getByText } = component;

    let fillTheGapBtn = getByText("start filling the gap");
    expect(fillTheGapBtn).toBeInTheDocument();

    fireEvent.click(fillTheGapBtn);
    expect(fillTheGapBtn.textContent).toBe("stop filling the gap");
  });
});
