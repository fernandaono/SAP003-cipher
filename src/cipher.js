window.cipher = {
  encode: encode,
  decode: decode
};
function encode(nbr, str) {
  let charCode = "";
  let calc;
  let cifra;
  for (let i = 0; i < str.length; i++) {
    let letterCode = str.charCodeAt(i);
    if (letterCode >= 65 && letterCode <= 90) {
      calc = (letterCode - 65 + nbr) % 26 + 65;
      cifra = String.fromCharCode(calc);
    } else if (letterCode >= 97 && letterCode <= 122) {
      calc = (letterCode - 97 + nbr) % 26 + 97;
      cifra = String.fromCharCode(calc);
    } else {
      cifra = str[i];
    } charCode += cifra;
  } return charCode;
} 
function decode(nbr, str) {
  let charDecode = "";
  let calc2;
  let cifra2;
  for (let j = 0; j < str.length; j++) {
    let letterDecode = str.charCodeAt(j);
    if (letterDecode >= 65 && letterDecode <= 90) {
      calc2 = (letterDecode - 65 - nbr) % 26 + 65;
      cifra2 = String.fromCharCode(calc2);
    } else if (letterDecode >= 97 && letterDecode <= 122) {
      calc2 = (letterDecode - 97 - nbr) % 26 + 97;
      cifra2 = String.fromCharCode(calc2);
    } else {
      cifra2 = str[j];
    } charDecode += cifra2;
  } return charDecode;
} 
