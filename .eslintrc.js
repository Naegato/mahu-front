module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    // "plugin:@typescript-eslint/recommended-requiring-type-checking"
    "plugin:react/jsx-runtime"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"]
  },
  plugins: ["unused-imports", "@typescript-eslint", "react"],
  rules: {
    'no-console': 0,
    'no-unused-vars': "off",
    'unused-imports/no-unused-imports': "error",
    'unused-imports/no-unused-vars': [
      "warn",
      { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" }
    ],

    // To be removed !
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',

    '@typescript-eslint/no-unused-vars': 'off', // duplicate wi 'no-unused-vars'
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",

    // Formatters
    indent: ["error", 2, { "SwitchCase": 1 }],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    'linebreak-style': ["error", "unix"],
    'object-curly-spacing': ["error", "always"],
    'no-case-declarations': "off",
    'key-spacing': ["error", { "afterColon": true }],
    '@typescript-eslint/type-annotation-spacing': "error",
    "space-infix-ops": ["error", { "int32Hint": false }],
    "react/jsx-space-before-closing": ["error", "always"],
  },
}
