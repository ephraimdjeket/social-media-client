import globals from "globals";
import pluginJs from "@eslint/js";
import jestPlugin from "eslint-plugin-jest";
import cypressPlugin from "eslint-plugin-cypress";

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
      jest: jestPlugin,
    },
    languageOptions: {
      globals: {
        jest: "readonly",
        global: "readonly",
      },
    },
    rules: {
      "jest/prefer-expect-assertions": "off",
    },
  },
  {
    files: ["**/*.cy.js"],
    plugins: {
      cypress: cypressPlugin,
    },
    languageOptions: {
      globals: {
        Cypress: "readonly",
      },
    },
    rules: {
      "cypress/no-unnecessary-waiting": "off",
      "no-unused-vars": "off",
    },
  },
];
