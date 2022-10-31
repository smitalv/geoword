import CryptoJS from 'crypto-js';

export default new class {
    generateHash(char, index, hash) {
        console.log(char, index, hash);
      return CryptoJS.SHA256(char + index + hash).toString();
    }
 } 