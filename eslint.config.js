//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'

// Use only the tanstack config without any additional plugin conflicts
export default [
  ...tanstackConfig,
  {
    ignores: ['eslint.config.js', 'prettier.config.js'],
  },
]
