import React from 'react';
// renderやscreenはImport必要
import { render, screen } from '@testing-library/react';
import App from './App';

// Jestに関してはImport不要
// https://jestjs.io/ja/docs/api
// APIリファレンスでJestの関数を調査
// https://jestjs.io/ja/docs/api#testname-fn-timeout
// test(name, fn, timeout)
// The default timeout is 5 seconds.
test('renders learn react link', () => {
  // https://testing-library.com/docs/svelte-testing-library/api/#render
  // Render your component to the DOM with Svelte. By default, the component will be rendered into a <div> appended to document.body.
  // テストを行うコンポーネントを指定する
  render(<App />);
  // https://testing-library.com/docs/queries/about/#textmatch-examples
  const linkElement = screen.getByText(/learn react/i);
  // https://jestjs.io/ja/docs/expect#expect
  expect(linkElement).toBeInTheDocument();
});
