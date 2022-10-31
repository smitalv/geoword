import ResultDecrypter from './ResultDecrypter';
import LetterHashesResolver from './LetterHashesResolver';

export default new class {
  submitLine(decryptedResult, lines, charsCorrect) {
    if (lines[lines.length - 1].length !== LetterHashesResolver.resolveHashes().length) {
      return null;
    }

    let result = ResultDecrypter.tryDecryptResult(lines, charsCorrect);

    if (result === null) {
      lines.push('');
    }

    return result;
  }
} 