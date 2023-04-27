module.exports = {
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaVersion": 2021,
      "sourceType": "module",
      "project": "./tsconfig.json"
    },
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "plugins": ["@typescript-eslint"],
    "rules": {
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-return": "off"
  }
}
