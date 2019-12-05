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
  const open = wrapper.getByText(/open/i);
  const gate = wrapper.getByText(/unlocked/i);
  expect(open).toBeVisible();
  expect(gate).toBeVisible();
});

test("display 'closed' if close prop is true", () => {
  const wrapper = rtl.render(<Display closed={true} />);
  const closed = wrapper.getByText(/closed/i);
  expect(closed).toBeVisible();
});

test("display 'open' if close prop is false", () => {
  const wrapper = rtl.render(<Display closed={false} />);
  const open = wrapper.getByText(/open/i);
  expect(open).toBeVisible();
});

test("display 'locked' if locked prop is true", () => {
  const wrapper = rtl.render(<Display locked={true} />);
  const lock = wrapper.getByText(/locked/i);
  expect(lock).toBeVisible();
});

test("display 'unlocked' if locked prop is false", () => {
  const wrapper = rtl.render(<Display locked={false} />);
  const lock = wrapper.getByText(/unlocked/i);
  expect(lock).toBeVisible();
});

test("contains red-led class when gate is locked or closed", () => {
  const wrapper = rtl.render(<Display locked={true} closed={true} />);
  const lock = wrapper.getByText(/locked/i);
  const gate = wrapper.getByText(/closed/i);
  expect(lock).toHaveClass("red-led");
  expect(gate).toHaveClass("red-led");
});

test("contains green-led class when gate is unlocked or open", () => {
  const wrapper = rtl.render(<Display locked={false} closed={false} />);
  const lock = wrapper.getByText(/unlocked/i);
  const gate = wrapper.getByText(/open/i);
  expect(lock).toHaveClass("green-led");
  expect(gate).toHaveClass("green-led");
});
