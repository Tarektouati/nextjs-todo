import {it, vi, expect} from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"

import { Button } from "./Button"

it("should render", () => {
    //Given
    //When
    render(<Button>Click me</Button>)
    
    //Then
    screen.getByRole("button", {name: "Click me"})
})

it("should trigger callback when button is clicked", () => {
    //Given
    const onClickMock = vi.fn()
    render(<Button onClick={onClickMock}>Click me</Button>)
    
    //When
    fireEvent.click(screen.getByRole("button", {name: "Click me"}))

    //Then
    expect(onClickMock).toHaveBeenCalledOnce()
})
