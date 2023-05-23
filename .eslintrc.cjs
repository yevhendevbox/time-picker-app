module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    "plugin:vue/vue3-recommended",
    "prettier"
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "vue/require-default-prop": "off",
    'linebreak-style': 'off',
    'max-len': ['error', { code: 120, tabWidth: 2 }],
    'no-useless-escape': 'off',
  }
}