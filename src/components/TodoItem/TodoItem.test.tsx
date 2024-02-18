import { vi, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "./TodoItem";

it("should render", () => {
  const todo = {
    id: "1",
    title: "Test",
    complete: false,
    deleted: false,
  };

  render(<TodoItem todo={todo} />);

  screen.getByText(todo.title);
});


it("should trigger toggleTodo on button click ", () => {
  const todo = {
    id: "1",
    title: "Test",
    complete: false,
    deleted: false,
  };

  const toggleTodoMock = vi.fn().mockResolvedValue(undefined);

  render(<TodoItem todo={todo}  toggleTodo={toggleTodoMock} />);

  fireEvent.click(screen.getByRole("checkbox"))

  expect(toggleTodoMock).toHaveBeenCalledWith(todo.id, true);
});