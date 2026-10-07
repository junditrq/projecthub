import { plugin as shadcn } from '@shadcn/lint';
import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import tsParser from '@typescript-eslint/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    ignores: [
      'app/generated/**/*',
      'app/generated/prisma/**/*',
      '.next/**/*',
      'node_modules/**/*',
      '*.tsbuildinfo',
      'next-env.d.ts',
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      shadcn,
    },
    rules: {
      'shadcn/no-arbitrary-values': 'error',
    },
  },
];

export default eslintConfig;
