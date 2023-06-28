// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
const letters =
  {
    11:"a",
    21:"b",
    31:"c",
    41:"d",
    51:"e",
    12:"f",
    22:"g",
    32:"h",
    42:"i/j",
    52:"k",
    13:"l",
    23:"m",
    33:"n",
    43:"o",
    53:"p",
    14:"q",
    24:"r",
    34:"s",
    44:"t",
    54:"u",
    15:"v",
    25:"w",
    35:"x",
    45:"y",
    55:"z",
  }

  function polybius(input, encode = true) {
     //initialize an empty string for decoded value
    //split input into individual elements(split returns a new array)
    //set that value = value.toLowercase
    //with that value, see if letters include input
    //return letters.indexOf element
    // spaces should be maintained throughout 
    // set value to decoded

    // if input includes letter
    // decoded = value.join
    // output should still be a string 

  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
