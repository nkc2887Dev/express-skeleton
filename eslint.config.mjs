import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { 
    files: ["src/**/*.{js,mjs,cjs,ts,tsx}"],
    // files: ["**/*.{js,mjs,cjs,ts}"]
  },
  { 
    languageOptions: 
    { globals: globals.browser }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {        
    "rules": {
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/no-warning-comments": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/camelcase": "off",
      "no-dupe-class-members": "off",
      "require-atomic-updates": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
    }
  },
  {
    "ignores": [
        "node_modules",
        "yarn.lock",
        "dist",
        ".husky",
        ".env.*",
        "Dockerfile",
        ".dockerignore",
        ".git",
        ".gitignore",
        ".prettierrc",
        "README.md",
        "docker-compose.yaml",
        "commitlint.config.js"
    ]
  }
];