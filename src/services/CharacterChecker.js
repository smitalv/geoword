export default new class {
    isCharCorrect(char, position, letterHashes, charsCorrect) {
        if (letterHashes[position] === char) {
          if (charsCorrect.indexOf(char) === -1) {
            charsCorrect.push(char);
          }
  
          return true;
        }
  
        return false;
    }
    isCharWarning(char, letterHashes, charsWarning) {
        let isWarning = false;
        letterHashes.forEach(answer => {
            if (answer === char) {
            if (charsWarning.indexOf(char) === -1) {
                charsWarning.push(char);
            }
            isWarning = true;
            }
        });

        return isWarning;
    }
 } 