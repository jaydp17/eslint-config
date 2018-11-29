module.exports = {
  extends: ['airbnb-base', 'prettier'],
  rules: {
    'no-use-before-define': ['error', { functions: false }],
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-restricted-syntax': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }]
  }
};
