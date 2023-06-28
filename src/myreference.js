function polybius(input, encode = true) {
    const letters = {
      a: "11", b: "21", c: "31", d: "41", e: "51",
      f: "12", g: "22", h: "32", i: "42", j: "42", k: "52",
      l: "13", m: "23", n: "33", o: "43", p: "53",
      q: "14", r: "24", s: "34", t: "44", u: "54",
      v: "15", w: "25", x: "35", y: "45", z: "55"
    };
  
    if (encode === false) {
      const count = input.replace(/ /g, "").length;
      if (count % 2 !== 0) {
        return false;
      }
  
      let decodedMessage = "";
      let currentPair = "";
      for (let char of input) {
        if (char === " ") {
          decodedMessage += " ";
          continue;
        }
  
        currentPair += char;
        if (currentPair.length === 2) {
          if (currentPair === "42") {
            // Handle "42" coordinate for both "I" and "J"
            decodedMessage += "(i/j)";
          } else {
            const letter = Object.keys(letters).find(key => letters[key] === currentPair);
            if (letter) {
              decodedMessage += letter;
            } else {
              return false;
            }
          }
          currentPair = "";
        }
      }
  
      return decodedMessage;
    } else {
      // Encoding
      const encodedMessage = input
        .toLowerCase().split("").map((letter) => {
          if (letter === " ") {
            return " ";
          } else if (letter === "i" || letter === "j") {
            // Handle both "I" and "J" as "42"
            return "42";
          } else {
            return letters[letter];
          }
        })
        .join("");
  
      return encodedMessage;
    }
  }