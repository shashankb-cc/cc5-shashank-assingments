module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier","plugin:vitest-globals/recommended"],
  overrides: [
    {
      env: {
        node: true,
        "vitest-globals/env": true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "module",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "linebreak-style": "off",
    "no-plusplus": "off",
  },
  "max-classes-per-file": ["error", { ignoreExpressions: true, max: 2 }],
};
