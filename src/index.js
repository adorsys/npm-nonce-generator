const jose = require('node-jose');

function NonceGenerator() {
  function generateNonce() {
    const randomBytes = jose.util.randomBytes(4);
    return randomBytes.readUInt32BE(0);
  }

  this.generateNonce = generateNonce;
}

module.exports = new NonceGenerator();
