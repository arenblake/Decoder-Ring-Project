// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope


  function caesar(input, shift, encode = true) {
    if(shift === 0 || shift < -25 || shift > 25) return false
    // Wrap the shift

    if (!encode) {
      return caesar(input, shift - (shift * 2));
    }

    if (shift < 0) {
      return caesar(input, shift + 26);
    }

    const msg = input.toLowerCase()

    // Make an output variable
    let output = "";

    // Go through each character
    for (let i = 0; i < msg.length; i++) {
      // Get the character we'll be appending
      let c = msg[i];

      // If it's a letter...
      if (c.match(/[a-z]/i)) {
        // Get its code
        let code = msg.charCodeAt(i);
        c = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }

      // Append
      output += c;
    }

    // All done!
    return output;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
