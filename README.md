# a-nonce-generator

[![Travis](https://img.shields.io/travis/adorsys/npm-nonce-generator.svg?style=flat-square)](https://travis-ci.org/adorsys/npm-nonce-generator/builds/)
[![Codecov](https://img.shields.io/codecov/c/github/adorsys/npm-nonce-generator.svg?style=flat-square)](https://codecov.io/gh/adorsys/npm-nonce-generator)
[![npm](https://img.shields.io/npm/v/a-nonce-generator.svg?style=flat-square)](https://www.npmjs.com/package/a-nonce-generator)
[![npm](https://img.shields.io/npm/dm/a-nonce-generator.svg?style=flat-square)](https://www.npmjs.com/package/a-nonce-generator)
[![license](https://img.shields.io/github/license/adorsys/npm-nonce-generator.svg?style=flat-square)](https://github.com/adorsys/npm-nonce-generator/blob/master/LICENSE)

A generator for creating nonces.

## Installation

````
npm install a-nonce-generator 
````

## Usage

``` js
const { generateNonce } = require('a-nonce-generator');

const nonce = generateNonce();
```

## Tests

Install dev dependencies with `npm install`, then `npm test`.

