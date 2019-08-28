document.getElementById("clickEncode").addEventListener("click", codificar);
document.getElementById("clickDecode").addEventListener("click", decodificar);

function codificar() {
  event.preventDefault();
  let str = document.getElementById("mensagem").value;
  let nbr = parseInt(document.getElementById("deslocamento").value);
  let code = window.cipher.encode(nbr, str);
  document.getElementById("cifra").innerHTML = code;
}
function decodificar() {
  event.preventDefault();
  let str = document.getElementById("mensagem").value;
  let nbr = parseInt(document.getElementById("deslocamento").value);
  let code = window.cipher.decode(nbr, str);
  document.getElementById("decifra").innerHTML = code;
}