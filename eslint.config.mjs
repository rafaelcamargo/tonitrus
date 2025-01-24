import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  pluginJs.configs.recommended,
  {
    files: ["src/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2021,
        ...globals.commonjs,
        ...globals.jest
      },
    },
    rules: {
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      'no-console': 0,
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      complexity: ['error', { max: 3 }],
      'max-lines': ['error', { max: 100 }],
      'max-statements': ['error', { max: 5 }, { ignoreTopLevelFunctions: true }]
    }
  },
  {
    files: [ 'src/**/*.test.js' ],
    rules: {
      'max-lines': ['error', { max: 250 }],
      'max-statements': ['error', { max: 15 },
        { ignoreTopLevelFunctions: true }
      ]
    }
  }
]
