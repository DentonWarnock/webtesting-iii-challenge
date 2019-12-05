import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";

test("Display component snapshot", () => {
  const element = rtl.render(<Controls />);
  expect(element.asFragment()).toMatchSnapshot();
});

test("controls render and display close gate and lock gate buttons", () => {
  const wrapper = rtl.render(<Controls />);
  const close = wrapper.getByText(/close gate/i);
  const gate = wrapper.getByText(/lock gate/i);
  expect(close).toBeVisible();
  expect(gate).toBeVisible();
});

test("control button reads 'close gate' when closed prop = false", () => {
  const wrapper = rtl.render(<Controls closed={false} />);
  const close = wrapper.getByText(/close gate/i);
  expect(close).toBeVisible();
});

test("control button reads 'open gate' when closed prop = true", () => {
  const wrapper = rtl.render(<Controls closed={true} />);
  const open = wrapper.getByText(/open gate/i);
  expect(open).toBeVisible();
});

test("the closed toggle button is disabled if the gate is locked", () => {
  const toggleLocked = jest.fn();
  const toggleClosed = jest.fn();
  const wrapper = rtl.render(
    <Controls
      locked={true}
      closed={true}
      toggleLocked={toggleLocked}
      toggleClosed={toggleClosed}
    />
  );
  const closeBtn = wrapper.getByText(/open gate/i);

  rtl.act(() => {
    rtl.fireEvent.click(closeBtn);
  });

  expect(closeBtn.disabled).toBe(true);
});

test("the locked toggle button is disabled if the gate is open", () => {
  const toggleLocked = jest.fn();
  const toggleClosed = jest.fn();
  const wrapper = rtl.render(
    <Controls
      locked={false}
      closed={false}
      toggleLocked={toggleLocked}
      toggleClosed={toggleClosed}
    />
  );
  const lockBtn = wrapper.getByText(/lock gate/i);

  rtl.act(() => {
    rtl.fireEvent.click(lockBtn);
  });

  expect(lockBtn.disabled).toBe(true);
});
