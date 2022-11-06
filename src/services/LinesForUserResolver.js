import CharacterChecker from './CharacterChecker';

export default new class {
    resolveLines(lines, letterHashes, charsCorrect, charsWarning, finished) {
      let newLines = [];

      for (
          let i = lines.length - 1; 
          i >= 0 && i >= lines.length - 3; 
          i--
        ) {
        let line = lines[i];
        let isValidated = (i < lines.length - 1) || finished;
        let newLine = {
          letters: [],
        };

        let letters = line.split('');
        for (let i = 0; i < letterHashes.length; i++) {
          if (letters[i] === undefined) {
            newLine.letters.push(
              {
                char: null,
                correct: false,
                warning: false,
              });
          } else if (isValidated) {
            let isCorrect = CharacterChecker.isCharCorrect(letters[i], i, letterHashes, charsCorrect);
            newLine.letters.push(
              {
                char: letters[i],
                correct: isCorrect,
                warning: isCorrect ? false : CharacterChecker.isCharWarning(letters[i], i, letterHashes, letters, charsWarning),
              });
          } else {
            newLine.letters.push(
              {
                char: letters[i],
                correct: false,
                warning: false,
              })
            }
          }

        

        newLines.push(newLine);
      }

      return newLines;
    }
 } 