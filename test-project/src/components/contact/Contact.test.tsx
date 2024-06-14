import { render, screen } from "@testing-library/react"
import Contact from "./Contact";

// textbox inputなどのテストを実施するgetByRole
describe("Contact", () => {
  test("renders correctly", () => {
    render(<Contact />);
    const nameElement = screen.getByRole("textbox");
    expect(nameElement).toBeInTheDocument();

    const questionsElement = screen.getByRole("combobox");
    expect(questionsElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  })

})