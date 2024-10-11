import antfu from "@antfu/eslint-config";

export default antfu({
  stylistic: {
    indent: 2,
    quotes: "double",
    semi: true,
  },

  rules: {
    /** STYLE */
    "style/arrow-parens": [
      "error",
      "always",
    ],
    /** END STYLE */
  },

  ignores: [],

  formatters: {
    html: true,
    css: true,
  },

  jsonc: false,
  yaml: false,
});
