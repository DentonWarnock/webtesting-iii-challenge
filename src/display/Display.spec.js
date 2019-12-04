import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

test("Display component snapshot", () => {
  const element = rtl.render(<Display />);
  expect(element.asFragment()).toMatchSnapshot();
});

test("display renders and displays open", () => {
  const wrapper = rtl.render(<Display />);
  const element = wrapper.getByText(/open/i);
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
});
