window.cipher = {
  encode: encode,
  decode: decode
};
function encode(str, nbr) {
  let charCode = "";
  let calc;
  let cifra;
  for (let i = 0; i < str.length; i++) {
    let letterCode = str.charCodeAt(i);
    if (letterCode >= 65 && letterCode <= 90) {
      calc = (letterCode - 65 + nbr) % 26 + 65;
    } else if (letterCode >= 97 && letterCode <= 122) {
      calc = (letterCode - 97 + nbr) % 26 + 97;
    } else if (letterCode === 32) {
      calc = 32;
    } else {
      calc += str[i];
    }cifra = String.fromCharCode(calc);
    charCode += cifra;
  }
  return charCode;
} 

function decode(str, nbr) {
  let charCode = "";
  let calc;
  let cifra;
  for (let i = 0; i < str.length; i++) {
    let letterCode = str.charCodeAt(i);
    if (letterCode >= 65 && letterCode <= 90) {
      calc = (letterCode - 65 - nbr) % 26 + 65;
    } else if (letterCode >= 97 && letterCode <= 122) {
      calc = (letterCode - 97 - nbr) % 26 + 97;
    } else if (letterCode === 32) {
      calc = 32;
    } else {
      //calc += str[i];
    }cifra = String.fromCharCode(calc);
    charCode += cifra;
  }
  return charCode;
} 
