import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import unusedImports from 'eslint-plugin-unused-imports';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'unused-imports': unusedImports,
    },
    rules: {
      // Игнорирование предупреждений о пропущенных зависимостях в useEffect
      'react-hooks/exhaustive-deps': 'off',

      // Игнорирование предупреждений о неиспользуемых переменных
      'unused-imports/no-unused-vars': 'off',

      // Игнорирование ошибки о пустом объекте
      'no-empty-pattern': 'off',
    },

    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

    // rules: {
    //   ...reactHooks.configs.recommended.rules,
    //   'react-refresh/only-export-components': [
    //     'warn',
    //     { allowConstantExport: true },
    //   ],
    //   '@typescript-eslint/no-unused-vars': 'off',

    //   'unused-imports/no-unused-vars': [
    //     'warn',
    //     {
    //       vars: 'all',
    //       varsIgnorePattern: '^_',
    //       args: 'after-used',
    //       argsIgnorePattern: '^_',
    //     },
    //   ],
    //   'unused-imports/no-unused-imports': 'error',
    // },
  },
);
