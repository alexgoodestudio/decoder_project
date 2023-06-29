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
    42:["i","j"],
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
    if (input % 3) {
      return false;
    }
  
    if (encode === true) {
//split input into individual elements(split returns a new array)
//set that value = value.toLowercase
      const inputArray = input.toLowerCase().split("");
//map to iterate over each element of the inputArray. map will create a new array
      const matcher = inputArray.map((element) => {
// Object.keys returns an array of keys from the letters obj
        const key = Object.keys(letters).find((keyValue) =>
//search for element in the array returned by Object.keys
          letters[keyValue].includes(element)
        );
        if (key) {
// output should still be a string 
          return key.toString();
        } else {
          return element;
        }
      });
      return matcher.join("");
    }else{
//decoder starts here
if(encode === false){
  if(input % 3){
    console.log("this jawn is odd")
    return false
  }else{
  let pair = input.match(/.{1,2}/g);
  console.log(pair, "************")
  return pair
  }
}
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

/*


polybius()

input refers to the inputted text to be encoded or decoded.
encode refers to whether you should encode or decode the message. By default it is set to true.
When building the function, keep the following constraints and rules in mind:

You are welcome to assume that no additional symbols will be included as part of the input. Only spaces and letters will be included.
When encoding, your output should still be a string.
When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.
Spaces should be maintained throughout.
Capital letters can be ignored.
The letters I and J share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown.
Examples
polybius("thinkful"); //> "4432423352125413"
polybius("Hello world"); //> '3251131343 2543241341'

polybius("3251131343 2543241341", false); //> "hello world"
polybius("4432423352125413", false); //> "th(i/j)nkful
polybius("44324233521254134", false); //> false */
