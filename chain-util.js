const EC = require("elliptic").ec;
const { v4 } = require("uuid");
const ec = new EC("secp256k1");

class ChainUtil {
  static genKeyPair() {
    return ec.genKeyPair();
  }

  static id() {
    return v4();
  }
}

module.exports = ChainUtil;
