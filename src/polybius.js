// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const key = {
    a: '11',
    b: '21',
    c: '31',
    d: '41',
    e: '51',
    f: '12',
    g: '22',
    h: '32',
    ji: '42',
    i: '42',
    j: '42',
    k: '52',
    l: '13',
    m: '23',
    n: '33',
    o: '43',
    p: '53',
    q: '14',
    r: '24',
    s: '34',
    t: '44',
    u: '54',
    v: '15',
    w: '25',
    x: '35',
    y: '45',
    z: '55',
  }

  function polybius(input, encode = true) {
        // Make an output variable
        let output = "";

        if(encode) {
          // Go through each character
          for (let i = 0; i < input.length; i++) {
            // Get the character we'll be appending
            let c = input[i];
            // If it's a letter...
            if (c.match(/[a-z]/i)) {
              c = key[c]
            }
            output += c;
          }
        } else {
          if(input.replace(/\s/g, '').length % 2) return false
          const words = input.split(" ");
          const keyArr = Object.entries(key)
          for (let word in words) {
            for(let i=0; i<words[word].length; i+=2) {
              const charNum = `${words[word][i]}${words[word][i+1]}`
              const char = keyArr.find(index => index[1] === charNum)
              output += char[0]
            }
            output += " ";
          }
        }
        // All done!
        return output.trim();
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
