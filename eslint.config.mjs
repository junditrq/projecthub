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
  {
    ignores: [
      'app/generated/**/*',
      'app/generated/prisma/**/*',
      'core/infra/orm/prisma/generated/**/*',
      'minio-data/**/*',
      '.next/**/*',
      'node_modules/**/*',
      '*.tsbuildinfo',
      'next-env.d.ts',
    ],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
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
      'shadcn/no-arbitrary-values': ['error', { allow: ['layout'] }],
      'shadcn/no-restyle': ['warn', { allow: ['layout'] }],
      'shadcn/no-raw-colors': 'error',
      'shadcn/no-inline-styles': 'error',
      'shadcn/require-static-classes': 'error',
      'shadcn/no-unknown-classes': 'error',
    },
  },
  {
    files: ['components/ui/**/*'],
    plugins: {
      shadcn,
    },
    rules: {
      'shadcn/no-restyle': 'off',
      'shadcn/no-arbitrary-values': 'off',
      'shadcn/require-static-classes': 'off',
    },
  },
];

export default eslintConfig;
