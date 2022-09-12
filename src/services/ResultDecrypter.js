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

    return areAllCorrect ? CryptoJS.AES.decrypt('U2FsdGVkX18rgAgNuS4SFWnX+XjNTFvtMQXlCvP7MWhvH8wpL0K2mJWYUO173YP5', 'BRIDGE').toString(CryptoJS.enc.Utf8) : null;
  }
 } 