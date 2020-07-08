module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es2020': true
    },
    'extends': [
      'eslint:recommended',
      'plugin:prettier/recommended'
    ],
    'parserOptions': {
        'ecmaVersion': 11
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'prettier/prettier': [
          'error',
          {
            'singleQuote': true,
            'semi': true
          }
        ],
        'no-var': 'error',
        'prefer-const': 'error',
        'object-shorthand': 'error',
        'prefer-arrow-callback': 'error'
    }
};
