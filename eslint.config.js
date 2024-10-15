import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {},
  },
  {
    files: ["**/*.test.js"],
    plugins: {
      jest: {
        rules: {
          "jest/prefer-expect-assertions": "off",
        },
      },
    },
    languageOptions: {
      globals: {
        jest: "readonly",
        global: "readonly",
      },
    },
    extends: ["plugin:jest/recommended"],
  },
  {
    files: ["**/*.cy.js"],
    env: {
      "cypress/globals": true,
    },
    plugins: ["cypress"],
    extends: ["plugin:cypress/recommended"],
    rules: {
      "cypress/no-unnecessary-waiting": "off",
      "no-unused-vars": "off",
    },
  },
];
