require('babel-polyfill');

const { generateNonce } = require('../dist/index');
const t = require('tap');

t.test('generateNonce', (t1) => {
  // arrange
  const sampleSize = 10;

  // act
  const nonces = [...Array(sampleSize).keys()].map(() => generateNonce());

  // assert
  t1.ok(
    nonces.reduce(
      (aggregate, nonce) =>
        aggregate &&
        typeof nonce === 'number' &&
        nonce === Math.ceil(nonce) &&
        nonce >= 0 &&
        nonce < 2 ** 32,
      true,
    ),
    'returns always an unsinged int32',
  );
  t1.ok(
    [...new Set(nonces)].length === sampleSize,
    'returns different values when called several times',
  );
  t1.end();
});
