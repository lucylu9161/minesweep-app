import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint-define-config";
import parser from "@typescript-eslint/parser"; // Import the parser
import prettier from "eslint-plugin-prettier"; // Import the Prettier plugin

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], // Match all relevant file types
    languageOptions: {
      globals: {
        ...globals.browser, // Use browser globals
      },
      parser: parser, // Set the parser correctly
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX
        },
        ecmaVersion: 12, // Set ECMAScript version
        sourceType: "module", // Use ES modules
      },
    },
    plugins: {
      react: pluginReact, // Define plugins as an object
      //"@typescript-eslint": tseslint, // Include TypeScript ESLint plugin
      prettier: prettier, // Use the imported Prettier plugin
    },
    rules: {
      //"prettier/prettier": ["error", { singleQuote: false }], // Prettier rules
      "react/prop-types": 0, // Disable prop-types rule
    },
  },
  {
    files: ["webpack.config.js"], // Specific rules for webpack config
    rules: {
      "@typescript-eslint/no-var-requires": ["off"], // Allow require statements
    },
  },
  // Extend recommended configurations
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
  },
]);
