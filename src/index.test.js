require('babel-polyfill');

const { generateNonce } = require('../dist/index');
const t = require('tap');

function isUInt32(value) {
  return (
    typeof value === 'number' &&
    value === Math.ceil(value) &&
    value >= 0 &&
    value < 2 ** 32
  );
}

t.test('generateNonce', (t1) => {
  // arrange
  const sampleSize = 10;

  // act
  const nonces = [...Array(sampleSize).keys()].map(() => generateNonce());

  // assert
  t1.ok(
    nonces.reduce((prev, nonce) => prev && isUInt32(nonce), true),
    'returns always an unsinged int32',
  );
  t1.ok(
    [...new Set(nonces)].length === sampleSize,
    'returns different values when called several times',
  );
  t1.end();
});
