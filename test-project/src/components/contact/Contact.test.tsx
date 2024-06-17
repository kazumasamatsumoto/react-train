import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

// textbox inputなどのテストを実施するgetByRole
describe("Contact", () => {
  test("renders correctly", () => {
    render(<Contact />);

    const h1Text = screen.getByRole("heading", {
      name: "お問い合わせフォーム",
    });
    expect(h1Text).toBeInTheDocument();

    const h2Tag = screen.getByRole("heading", {name: "H2タグ"});
    expect(h2Tag).toBeInTheDocument();

    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    // リファクタリングの実施前には、data-testidを利用してテストを実施する
    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    const paragraphText = screen.getByText("全てのフィールドは必須項目です");
    expect(paragraphText).toBeInTheDocument();

    // Alt属性でテストをするのがおすすめ

    const imageElement = screen.getByAltText("sample alt");
    expect(imageElement).toBeInTheDocument();

    // クエリのは優先順位が存在する
    // ユーザーの視点に立ってテストを実施する
    const nameElement = screen.getByRole("textbox", { name: "お名前" });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("お名前");
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText("fullName");
    expect(nameElement3).toBeInTheDocument();

    // const nameElement4 = screen.getByDisplayValue("Shincode");
    // expect(nameElement4).toBeInTheDocument();

    const emailElement = screen.getByRole("textbox", {
      name: "メールアドレス",
    });
    expect(emailElement).toBeInTheDocument();

    const questionsElement = screen.getByRole("combobox");
    expect(questionsElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
