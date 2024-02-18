import { it, vi, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import { Input } from "./Input";

it("should render", () => {
  //Given
  //When
  render(<Input />);

  //Then
  screen.getByPlaceholderText("Create a new todo item");
});

it("should trigger callback when input is filled", () => {
  //Given
  const onChangeMock = vi.fn();
  render(
    <Input
      onChange={onChangeMock}
    />
  );

  //When
  fireEvent.change(screen.getByPlaceholderText("Create a new todo item"), {
    target: { value: "a random 5tring" },
  });

  //Then
  expect(onChangeMock).toHaveBeenCalled();
});
