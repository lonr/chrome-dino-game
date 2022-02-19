// https://source.chromium.org/chromium/chromium/src/+/main:.eslintrc.js;l=1?q=eslintrc&sq=&ss=chromium%2Fchromium%2Fsrc
// Rules conflicting with Prettier were removed
// https://github.com/prettier/eslint-config-prettier#cli-helper-tool

// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

module.exports = {
  extends: ['prettier'],
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    // Enabled checks.
    // "brace-style": ["error", "1tbs"],
    // curly: ["error", "multi-line", "consistent"],
    // modified
    curly: ['error', 'all'],
    'no-extra-boolean-cast': 'error',
    // "no-extra-semi": "error",
    'no-new-wrappers': 'error',
    'no-restricted-properties': [
      'error',
      // {
      //   object: "document",
      //   property: "getElementById",
      //   message:
      //     "Use $('id') or getSVGElement('id') " +
      //     "from chrome://resources/js/util.js instead of " +
      //     "document.getElementById('id')",
      // },
      {
        property: '__lookupGetter__',
        message: 'Use Object.getOwnPropertyDescriptor',
      },
      {
        property: '__lookupSetter__',
        message: 'Use Object.getOwnPropertyDescriptor',
      },
      {
        property: '__defineGetter__',
        message: 'Use Object.defineProperty',
      },
      {
        property: '__defineSetter__',
        message: 'Use Object.defineProperty',
      },
      {
        object: 'cr',
        property: 'exportPath',
        message: 'Use ES modules or cr.define() instead',
      },
    ],
    'no-var': 'error',
    'prefer-const': 'error',
    // semi: ["error", "always"],

    // TODO(dpapad): Add more checks according to our styleguide.
  },

  // overrides: [
  //   {
  //     files: ["**/*.ts"],
  //     parser: "./third_party/node/node_modules/@typescript-eslint/parser",
  //   },
  // ],
};
