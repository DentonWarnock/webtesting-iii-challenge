import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";

test("display dashboard component snapshot", () => {
  const element = render(<Dashboard />);
  expect(element.asFragment()).toMatchSnapshot();
});

test("dashboard displays the words open and unlocked as defaults", () => {
  const wrapper = render(<Dashboard />);
  const open = wrapper.getByText(/open/i);
  const gate = wrapper.getByText(/unlocked/i);
  expect(open).toBeInTheDocument();
  expect(open).toBeVisible();
  expect(gate).toBeInTheDocument();
  expect(gate).toBeVisible();
});

test("dashboard displays default controls of lock gate and close gate", () => {
  const wrapper = render(<Dashboard />);
  const lock = wrapper.getByText(/lock gate/i);
  const close = wrapper.getByText(/close gate/i);
  expect(lock).toBeInTheDocument();
  expect(lock).toBeVisible();
  expect(close).toBeInTheDocument();
  expect(close).toBeVisible();
});
