import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

test("挨拶が正常にレンダリングされる", () => {
  render(<Greet />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
})

// test("挨拶が正常にレンダリングされる2", () => {
//   // これは必ず失敗するようにしています。
//   render(<Greet />);
//   const textElement = screen.getByText("hello");
//   expect(textElement).toBeInTheDocument();
// })

test("挨拶が正常にレンダリングされる3", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
})