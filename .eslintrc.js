const config = {
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    project: true
    // ecmaFeatures: {
    //   jsx: true,
    // },
    // ecmaVersion: 12,
    // sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    // 'plugin:sonarjs/recommended',
    // 'plugin:unicorn/recommended',
    // 'plugin:security/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ]
  }
  // ignorePatterns: ["*.js"],
};

module.exports = config;
