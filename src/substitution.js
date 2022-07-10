// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function isUnique(str) {
    return new Set(str).size == str.length;
  }

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26 || !isUnique(alphabet)) return false

    output = ''
    const key = []
    for (let char in alphabet) {
      const c = String.fromCharCode((97 + Number(char)))
      key.push([c, alphabet[char]])
    }

    if(encode) {
          // Go through each character
      for (let i = 0; i < input.length; i++) {
        // Get the character we'll be appending
        let c = input[i];
        // If it's a letter...
        if (c.match(/[a-z]/i)) {
          const code = key.find(ele => {
            return ele[0] === c
          })
          c = code[1]
        }
        // Append
        output += c;
      }
    } else {
      // Go through each character
      for (let i = 0; i < input.length; i++) {
        // Get the character we'll be appending
        let c = input[i];
        // If it's a letter...
        if (key.find(ele => ele[1] === c)) {
          const code = key.find(ele => {
            return ele[1] === c
          })
          c = code[0]
        }
        // Append
        output += c;
      }
    }

    return output
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
