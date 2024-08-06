module.exports = {
  extends: [
    "expo",
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "plugin:react/jsx-runtime",
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
