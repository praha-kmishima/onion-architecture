import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true, // グローバル API (describe, it など) を使用する場合
    environment: 'node', // テスト環境 (node または jsdom)
    include: ['**/*.test.ts'], // テストファイルのパターン
    exclude: ['node_modules'], // 除外するファイル
    coverage: {
      reporter: ['text', 'json', 'html'], // カバレッジレポートの種類
    },
  },
}) 