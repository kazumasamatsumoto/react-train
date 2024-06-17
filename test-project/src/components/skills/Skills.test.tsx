import React from "react";
import { render, screen, within, fireEvent, waitFor } from "@testing-library/react";
import Skills from "./Skills";

const skills = ["HTML", "CSS", "JavaScript"];

describe("Skills", () => {
  test("renders correctly", () => {
    render(<Skills skills={skills} />);

    const listElements = screen.getAllByRole("list");

    // 正しいリスト要素をフィルタリング
    const correctListElement = listElements.find((list) => {
      const listItems = within(list).getAllByRole("listitem");
      return listItems.length === skills.length;
    });

    // 正しいリスト要素が見つからない場合、テストを失敗させる
    if (!correctListElement) {
      throw new Error("Correct list element not found");
    }

    const listItems = within(correctListElement).getAllByRole("listitem");
    expect(listItems).toHaveLength(skills.length);
    expect(listItems[0]).toHaveTextContent("HTML");
    expect(listItems[1]).toHaveTextContent("CSS");
    expect(listItems[2]).toHaveTextContent("JavaScript");
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });

  test('renders Login button', () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.getByRole('button', { name: 'Login' })
    expect(loginButton).toBeInTheDocument()
  })

  test('Start Learning button is not rendered initially', () => {
    render(<Skills skills={skills} />)
    const startLearningButton = screen.queryByRole('button', {
      name: 'Start learning',
    })
    expect(startLearningButton).not.toBeInTheDocument()
  })

  // 非同期処理の場合はasync awaitが必要
  test('Start Learning button is eventually displayed', async () => {
    render(<Skills skills={skills} />);

    const startLearningButton = await waitFor(() =>
      screen.findByRole('button', { name: 'Start learning' }),
      { timeout: 1100 } // タイムアウトを少し長めに設定
    );

    expect(startLearningButton).toBeInTheDocument();
  });

  // 新しいテストケース: 初期状態の検証
  test('Login button is displayed initially', () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole('button', { name: 'Login' });
    expect(loginButton).toBeInTheDocument();
  });

  // 新しいテストケース: ログインボタンのクリック
  test('Start learning button is displayed after clicking Login button', async () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole('button', { name: 'Login' });

    // Loginボタンをクリック
    fireEvent.click(loginButton);

    const startLearningButton = await waitFor(() =>
      screen.findByRole('button', { name: 'Start learning' }),
      { timeout: 1100 } // タイムアウトを少し長めに設定
    );

    expect(startLearningButton).toBeInTheDocument();
  });
});
