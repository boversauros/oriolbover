import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  eslint.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        fetch: 'readonly',
        console: 'readonly',
        process: 'readonly',
      },
    },
    rules: {
      'no-undef': ['error', { typeof: true }],
    },
  },
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslintPluginPrettier.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
  },
  prettier,
];
