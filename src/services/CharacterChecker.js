import LetterHashGenerator from "./LetterHashGenerator";

export default new class {
    isCharCorrect(char, position, letterHashes, charsCorrect) {
        let hash = new URLSearchParams(window.location.search).get('h');

        if (letterHashes[position] === LetterHashGenerator.generateHash(char, position + 1, hash)) {
            if (charsCorrect.indexOf(char) === -1) {
                charsCorrect.push(char);
            }
  
          return true;
        }
  
        return false;
    }
    isCharWarning(char, position, letterHashes, letters, charsWarning) {
        let hash = new URLSearchParams(window.location.search).get('h');
        let isWarning = false;
        let correctPositions = [];
        letterHashes.forEach((answer, index) => {
            if (answer === LetterHashGenerator.generateHash(char, index + 1, hash)) {                
                isWarning = true;
                correctPositions.push(index);
            }
        });
        if (isWarning && this.checkWarningOccurency(letters, char, position, correctPositions)) {
            if (charsWarning.indexOf(char) === -1) {
                charsWarning.push(char);
            }
            return true;
        }

        return false;
    }
    checkWarningOccurency(letters, char, position, correctPositions) {
        let userOccurencyCount = 0;
        letters.forEach((letter, index) => {
            if (letter === char) {
                if (
                    index <= position ||
                    correctPositions.indexOf(index) !== -1
                ) {
                    userOccurencyCount++;
                }
            }
        });

        return userOccurencyCount <= correctPositions.length;
    }
 } 