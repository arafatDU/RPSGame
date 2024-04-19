import crypto from 'crypto';

class HMAC {
  static generateKey(size) {
    return crypto.randomBytes(size).toString('hex');
  }

  static generateHMAC(move, key) {
    const hmac = crypto.createHmac('sha256', key);
    hmac.update(move);
    return hmac.digest('hex');
  }
}

export default HMAC;