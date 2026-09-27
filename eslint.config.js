import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['dist', 'node_modules'] },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  { files: ['scripts/**', '*.config.{js,ts}'], languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  // React 17+ JSX transform: no need to import React in every file.
  pluginReact.configs.flat['jsx-runtime'],
  {
    settings: { react: { version: 'detect' } },
    rules: {
      // TypeScript checks props.
      'react/prop-types': 'off',
      // Apostrophes and quotes in page text render fine; escaping them all hurts readability.
      'react/no-unescaped-entities': 'off'
    }
  },
  prettierRecommended
];
