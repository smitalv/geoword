export default new class {
    addChar(char, lines, maximumLength) {
        if (lines[lines.length - 1].length >= maximumLength) {
          return;
        }
  
        lines[lines.length - 1] += char;
    }
    delChar(lines) {
        if (lines[lines.length - 1].length === 0) {
          return;
        }
  
        lines[lines.length - 1] = lines[lines.length - 1].slice(0, lines[lines.length - 1].length - 1) 
    }
 } 