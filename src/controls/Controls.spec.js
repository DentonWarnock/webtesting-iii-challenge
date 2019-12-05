import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";

test("Display component snapshot", () => {
  const element = rtl.render(<Controls />);
  expect(element.asFragment()).toMatchSnapshot();
});

test("display renders and displays open", () => {
  const wrapper = rtl.render(<Controls />);
  const close = wrapper.getByText(/close/i);
  const gate = wrapper.getByText(/lock/i);
  expect(close).toBeVisible();
  expect(gate).toBeVisible();
});
