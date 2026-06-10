import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

const eslintConfig = defineConfig([
  ...nextVitals,
  eslintPluginPrettier,
  {
    rules: {
      'prettier/prettier': 'warn'
    }
  },
  globalIgnores([
    'node_modules/**',
    '.next/**',
    'public/admin/**',
    'tina/__generated__/**'
  ])
]);

export default eslintConfig;
