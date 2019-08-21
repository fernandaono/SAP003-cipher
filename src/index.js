function codificar(){
    let str = document.getElementById("mensagem").value;
    let charCodes = [];
    let nbr = parseInt(document.getElementById("deslocamento").value);

    for (let i = 0; i < str.length; i++) {
        charCodes.push(str.charCodeAt(i)+nbr);
        //console.log(str.charCodeAt(i));
    }
    let cifra = String.fromCharCode.apply(String,charCodes);
    document.getElementById("cifra").innerHTML= cifra;
}
