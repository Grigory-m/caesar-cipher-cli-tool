const alphabet = {'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9,
                  'k': 10, 'l': 11, 'm': 12, 'n': 13, 'o': 14, 'p': 15, 'q': 16, 'r': 17, 's': 18, 't': 19,
                  'u': 20, 'v': 21, 'w': 22, 'x': 23, 'y': 24, 'z': 25};

const encryption = (text, shift, action) => {  
  const letters = Array.from(Object.keys(alphabet));
  const cipher = [...letters.slice(shift % 26), ...letters.slice(0, shift % 26)];
  const map = new Map(Object.entries(alphabet));
  let encryptedText = '';
  
  text.split('').forEach((char) => {
    const letter = char.toLowerCase();
    const code = char.codePointAt(0);
    const index = +map.get(letter);
    const encryptedChar = action === 'encode' 
      ? cipher[index] 
      : letters[(index - shift + 26) % 26];
    if (map.has(letter)) {
      encryptedText += code > 64 && code < 91 ? encryptedChar.toUpperCase() : encryptedChar;
    } else {
      encryptedText += char;
    }
  });
  return encryptedText;
}

module.exports = encryption;