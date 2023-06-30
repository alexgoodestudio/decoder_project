// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet = "", encode = true) {
    // your solution code here
    const standardAlphabet = [
      'a', 'b', 'c', 'd', 'e', 'f',
      'g', 'h', 'i', 'j', 'k', 'l',
      'm', 'n', 'o', 'p', 'q', 'r',
      's', 't', 'u', 'v', 'w', 'x',
      'y', 'z'
    ];
// alphabet = bsdas
//a  b  c  d  e  
//b  s  d  a  s  
if(alphabet.length < 26 || new Set(alphabet).size !== 26 ){
  return false
}

//ENCODE =true
//splitting alphabet and input into an array of characters 
const splitstring = alphabet.toLowerCase().split("")
const inputArr = input.toLowerCase().split("")

//if alphabet is longer than 26 characters return false, must be a string
if(encode === true && alphabet.length === 26){
// we are creating a new array that sets alphabet array to have 
  const output = inputArr.map((character) =>{
    if(character === " "){
      return " "
    }
    let standAlpInd = standardAlphabet.indexOf(character)
    return splitstring[standAlpInd]
    })
    console.log(output, "******")
    return output.join("")
}

//DECODE =false
//if alphabet is longer than 26 characters return false
//
if(encode === false && alphabet.length === 26){
const decoder = inputArr.map((character) =>{
  if(character === " "){
    return " "
  }
  let codedAlph = splitstring.indexOf(character)
  return standardAlphabet[codedAlph]
})
console.log(decoder, "$$$$$$$$$")
return decoder.join("")
  }
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
/*
The substitution cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the substitution alphabet. This cipher requires that the recipient have the substitution alphabet, otherwise it will be difficult for them to decode the message.

For example, in the image above, the word HELLO would be translated as follows:

H becomes R.
E becomes M.
L becomes W.
O becomes L.
This would result in the code RMWWL. To decrypt this code, you would simply take the result and transpose back from the substitution alphabet to the standard alphabet.

substitution()
The substitution() function in the src/substitution.js file has three parameters:

input refers to the inputted text to be encoded or decoded.
alphabet refers to substitution alphabet.
encode refers to whether you should encode or decode the message. By default it is set to true.
When building the function, keep the following constraints and rules in mind:

The input could include spaces and letters as well as special characters such as #, $, *, etc.
Spaces should be maintained throughout.
Capital letters can be ignored.
The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.
All the characters in the alphabet parameter must be unique. Otherwise, it should return false.
Examples
substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'
substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful'

substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"); //> "y&ii$r&"
substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message"

substitution("thinkful", "short"); //> false
substitution("thinkful", "abcabcabcabcabcabcabcabcyz"); //> false
*/