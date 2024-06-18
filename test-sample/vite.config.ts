/// <reference types="vitest"/>
// リファレンスを追加することで、vitestの型を認識してくれる
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./vitest-setup.ts"],
    // ここにセットアップファイルと設定すると自動的に読み込まれる
  }
})
