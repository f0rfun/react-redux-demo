import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("+1 button", () => {
  it("should increase the counter value by 1", () => {
    const { getByText } = render(<App />);
    const addOneButton = getByText("+1");
    fireEvent.click(addOneButton);
    expect(() => getByText("Counter Value: 0")).toThrowError();
    expect(getByText("Counter Value: 1")).toBeInTheDocument();
  });

  it("should be enabled at start", () => {
    const { getByText } = render(<App />);
    const addOneButton = getByText("+1");
    expect(addOneButton.closest("button").disabled).toBeFalsy();
  });
});

describe("-1 button", () => {
  it("should decrease the counter value by 1", () => {
    const { getByText } = render(<App />);
    const subtractOneButton = getByText("-1");
    fireEvent.click(subtractOneButton);
    expect(() => getByText("Counter Value: 1")).toThrowError();
    expect(getByText("Counter Value: 0")).toBeInTheDocument();
  });

  it("should be disabled at start", () => {
    const { getByText } = render(<App />);
    const subtractOneButton = getByText("-1");
    expect(subtractOneButton.closest("button").disabled).toBeTruthy();
  });
});

describe("header", () => {
  it("should contain 3 links", () => {
    const { getByText } = render(<App />);
    const links = ["Home", "Singapore", "World"];

    links.forEach((link) => {
      expect(getByText(link)).toBeInTheDocument();
    });
  });

  it("should display singapore news page when clicked", () => {
    const { getByText } = render(<App />);
    const singaporeLink = getByText("Singapore");

    fireEvent.click(singaporeLink);
  });
});
