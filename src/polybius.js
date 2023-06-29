// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope}

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
    42:"(i/j)" ,
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
// MY SCOPE: how to find if an arrays elements are included in an objects key. If so return a join and return a string value

// ideas 1 map the LETTER array to create a new array that filters if PAIR includes any of letters key.objects
    //include returns true or false

//  we need to FIND out if the new PAIR array INCLUDES any KEY OBJECTS of LETTERS
  //include returns true or false
  

if(encode === false){
// numbers input must be even or return false
// console.log(input)
let pair = input.split(" ");
//if we have only one word, it will return ["string"]
//if we have multiple words, it will return ["string", "string"]
//check if input is one word or two word
//method3
pair.map((element)=>{
  let matchedE =  element.match(/.{1,2}/g);
  console.log(matchedE)
  return e;
})
//[['12','12','23]] [['12','23],['34','34','34']]
//end of method3
//console.log(pair)
if(pair.length > 1){
  let pair1 = pair[0];//first word
  let pair2 = pair[1];//second word
// console.log(pair1)
// console.log(pair2)
let temp = pair1.concat(pair2)
// console.log(temp.split(""), typeof temp)}
  if(temp.length % 2 !== 0){
    return false
  }else{

  pair1 = pair1.match(/.{1,2}/g);
  //pair1 = pair1.push(" ")
  pair2 = pair2.match(/.{1,2}/g);
  pair = [...pair1," ",...pair2]

  // pair = [`${pair1} ${pair2}`]
  //pair = input.match(/.{1,2}/g);
  // console.log("########",pair)
// Get the keys of the letters object
  const keys = Object.keys(letters); 
// Map  keys to their corresponding values from the letters 
  const filteredValues = pair.map((key) => {
// keep spaces 
    if (keys.includes(key)) {

      return letters[key]; 
    } else {
      return ' ';
    }
  });
  // console.log(filteredValues.join(""));
  return filteredValues.join("");
}
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
