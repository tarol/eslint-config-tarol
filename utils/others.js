module.exports = {
  es: {
    env: {
      browser: true,
      commonjs: true,
      es6: true,
      node: true,
      jest: true
    },
    parser: "babel-eslint",
    parserOptions: {
      ecmaFeatures: {
        ecmaVersion: 2018,
        legacyDecorators: true
      }
    }
  },
  react: {
    settings: {
      react: {
        version: "15.6"
      }
    }
  },
  _import: {
    plugins: ['import']
  }
};
