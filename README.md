# a-nonce-generator

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Travis](https://img.shields.io/travis/adorsys/npm-nonce-generator.svg?style=flat-square)](https://travis-ci.org/adorsys/npm-nonce-generator/builds/)
[![Coverage Status](https://img.shields.io/coveralls/adorsys/npm-nonce-generator.svg?style=flat-square)](https://coveralls.io/github/adorsys/npm-nonce-generator?branch=master)
[![npm](https://img.shields.io/npm/v/a-nonce-generator.svg?style=flat-square)](https://www.npmjs.com/package/a-nonce-generator)
[![npm](https://img.shields.io/npm/dm/a-nonce-generator.svg?style=flat-square)](https://www.npmjs.com/package/a-nonce-generator)
[![license](https://img.shields.io/github/license/adorsys/npm-nonce-generator.svg?style=flat-square)](https://github.com/adorsys/npm-nonce-generator/blob/master/LICENSE)

A generator for creating nonces.
It uses the package 'seedrandom' for better randomness.

## Homepage
[https://adorsys.github.io/npm-nonce-generator/](https://adorsys.github.io/npm-nonce-generator/)

## Installation

````
npm install a-nonce-generator
````

## Usage

``` js
import NonceGenerator from 'a-nonce-generator';
const ng = new NonceGenerator()
const nonce = tg.generate();
```

## Tests

Install dev dependencies with `npm install`, then run `npm test`.
