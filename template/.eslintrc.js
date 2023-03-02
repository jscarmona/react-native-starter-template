module.exports = {
  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks', 'plugin:prettier/recommended'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],
    'import/no-import-module-exports': [
      'error',
      {
        exceptions: ['**/__fixtures__/**', '**/__mocks__/**'],
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/__fixtures__/**',
          '**/__mocks__/**',
          '**/__tests__/**',
          '**/e2e/**',
          '**/jest*.js',
          '**/types/*.d.ts',
          '**/tests/**',
          '**/*.spec.{js,ts,tsx}',
          '**/test-utils/**',
          '**/jest-setup.ts',
        ],
        optionalDependencies: false,
      },
    ],
    'import/prefer-default-export': 'off',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'block-like',
      },
      {
        blankLine: 'always',
        prev: 'block-like',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.spec.ts', '*.spec.tsx'],
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
      },
    },
    {
      files: ['*.tsx'],
      rules: {
        'react/function-component-definition': [
          'error',
          {
            namedComponents: 'function-declaration',
          },
        ],
        'react/jsx-props-no-spreading': [
          'error',
          {
            html: 'enforce',
            custom: 'ignore',
            explicitSpread: 'ignore',
            exceptions: [],
          },
        ],
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
      },
    },
  ],
};
