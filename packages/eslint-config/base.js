import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import onlyWarn from 'eslint-plugin-only-warn';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import turboPlugin from 'eslint-plugin-turbo';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const config = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...importPlugin.flatConfigs.recommended,
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
  },
  eslintConfigPrettier,
  eslintPluginPrettier,
  {
    plugins: {
      turbo: turboPlugin,
      'unused-imports': unusedImports,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
      'prettier/prettier': 'warn',
      'no-unused-vars': 'off',
      'import/no-unused-modules': 'error',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ['dist/**'],
  },
];
