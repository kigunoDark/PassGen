module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: "^18.2.0",
    },
  },
  extends: "plugin:react/recommended",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 2], // Enforce 2-space indentation
    semi: ["error", "always"], // Require semicolons at the end of statements
    "no-var": "error", // Use let or const instead of var
    "prefer-const": "error", // Suggest using const for non-reassigned variables

    // React-specific rules
    "react/jsx-uses-react": "error", // Prevent React from being marked as unused
    "react/jsx-uses-vars": "error", // Prevent variables used in JSX from being marked as unused
    "react/react-in-jsx-scope": "error", // Prevent React from being incorrectly marked as unused
    "react/prop-types": "warn", // Warn if PropTyp
  },
};
