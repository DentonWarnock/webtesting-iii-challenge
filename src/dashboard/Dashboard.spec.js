import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";

test("display dashboard component snapshot", () => {
  const element = render(<Dashboard />);
  expect(element.asFragment()).toMatchSnapshot();
});

test("dashboard renders and displays the words open and gate", () => {
  const wrapper = render(<Dashboard />);
  const open = wrapper.getByText(/open/i);
  const gate = wrapper.getByText(/unlocked/i);
  expect(open).toBeInTheDocument();
  expect(open).toBeVisible();
  expect(gate).toBeInTheDocument();
  expect(gate).toBeVisible();
});
