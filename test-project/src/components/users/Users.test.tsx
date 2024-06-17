import { render, screen } from "@testing-library/react";
import { Users } from './Users';
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom/extend-expect';

// ハンドラーを定義
const handlers = [
  http.get('https://jsonplaceholder.typicode.com/users', () => {
    return HttpResponse.json([
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' },
      { id: 3, name: 'User 3' },
      { id: 4, name: 'User 4' },
      { id: 5, name: 'User 5' },
      { id: 6, name: 'User 6' },
      { id: 7, name: 'User 7' },
      { id: 8, name: 'User 8' },
      { id: 9, name: 'User 9' },
      { id: 10, name: 'User 10' },
    ]);
  }),
];

// サーバーを設定
const server = setupServer(...handlers);

// サーバーを開始および停止
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Users', () => {
  test('renders correctly', () => {
    render(<Users />)
    const textElement = screen.getByText('Users')
    expect(textElement).toBeInTheDocument()
  })

  test('renders a list of users', async () => {
    render(<Users />)
    const users = await screen.findAllByRole('listitem')
    expect(users).toHaveLength(10)
  })

  test('renders error', async () => {
    server.use(
      http.get(
        'https://jsonplaceholder.typicode.com/users',
        () => {
          return new Response(null, { status: 500 })
        }
      )
    )
    render(<Users />)
    const error = await screen.findByText('Error Fetching users')
    expect(error).toBeInTheDocument()
  })
})
