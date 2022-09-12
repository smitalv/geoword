export default new class {
    resolveButtons(charsCorrect, charsWarning) {
        let buttonLines = [
            ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
            ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
            ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
          ];
        let newButtonLines = [];
  
        buttonLines.forEach((line, index) => {
          let buttonLine = {
            buttons: [],
          };
  
          if (index === 2) {
            buttonLine.buttons.push({
              type: 'done',
              label: '✔️',
              correct: false,
              warning: false,
            });
          }
  
          line.forEach((char) => {
            buttonLine.buttons.push({
              type: 'char',
              label: char,
              correct: charsCorrect.indexOf(char) !== -1,
              warning: charsWarning.indexOf(char) !== -1,
            });
          });
  
          if (index === 2) {
            buttonLine.buttons.push({
              type: 'del',
              label: '←',
              correct: false,
              warning: false,
            });
          }
          
          newButtonLines.push(buttonLine);
        });
  
        return newButtonLines;
    }
 } 