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

    "style/jsx-one-expression-per-line": [
      "error",
      {
        allow: "non-jsx",
      },
    ],
    /** END STYLE */
  },
});
