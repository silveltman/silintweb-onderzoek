module.exports = {
  // docs: https://github.com/bjankord/stylelint-config-sass-guidelines
  extends: [
    'stylelint-config-sass-guidelines'
  ],

  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'order/properties-alphabetical-order': null,
    'color-hex-case': null,
    'color-named': null,
    'max-nesting-depth': null
  }
}
