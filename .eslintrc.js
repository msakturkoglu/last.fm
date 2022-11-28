module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:react/jsx-runtime', 'prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['react'],
    rules: {
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        'react/prop-types': 'off',
        'typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/strict-boolean-expression': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
    },
}
