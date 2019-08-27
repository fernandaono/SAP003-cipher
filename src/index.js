function codificar() {
  event.preventDefault();
  let str = document.getElementById("mensagem").value;
  let nbr = parseInt(document.getElementById("deslocamento").value);
  let code = window.cipher.encode(str, nbr);
  document.getElementById("cifra").innerHTML = code;
}

function decodificar() {
  event.preventDefault();
  let str = document.getElementById("mensagem").value;
  let nbr = parseInt(document.getElementById("deslocamento").value);
  let code = window.cipher.decode(str, nbr);
  document.getElementById("decifra").innerHTML = code;
}