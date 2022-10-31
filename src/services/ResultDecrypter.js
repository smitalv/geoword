import CryptoJS from 'crypto-js';
import CharacterChecker from './CharacterChecker';
import LetterHashesResolver from './LetterHashesResolver';

export default new class {
  tryDecryptResult(lines, charsCorrect) {
    if (lines[lines.length - 1].length !== LetterHashesResolver.resolveHashes().length) {
      return null;
    }

    let areAllCorrect = true;
    lines[lines.length - 1].split('').forEach((char, index) => {
      if (!CharacterChecker.isCharCorrect(char, index, LetterHashesResolver.resolveHashes(), charsCorrect)) {
        areAllCorrect = false;
      }
    });

    if (areAllCorrect) {
      let hash = new URLSearchParams(window.location.search).get('h');

      return CryptoJS.AES.decrypt(hash, lines[lines.length - 1]).toString(CryptoJS.enc.Utf8);
    }

    return null;
  }
 } 