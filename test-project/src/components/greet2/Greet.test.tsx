import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

describe("Sample", () => {

  test("render correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument()
  })

  test("render with a name", () => {
    render(<Greet name="ShinCode" />);
    const textElement = screen.getByText("Hello ShinCode");
    expect(textElement).toBeInTheDocument();
  });
})
