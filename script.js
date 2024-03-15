const input__text = document.querySelector("#text-input");
const input__mensagem = document.querySelector("#div-mensagem");

function criptografar() {
   const texto = input__text.value;

   const resultadoCripto = texto

   .replaceAll(/e/g, "enter")
   .replaceAll(/i/g, "imes")
   .replaceAll(/a/g,"ai")
   .replaceAll(/o/g, "ober")
   .replaceAll(/u/g,"ufat");

   document.getElementById('div-mensagem').innerHTML = resultadoCripto;
    
}

function descriptografar() {
    const texto = input__text.value;

    const resultadoDescripto = texto
    .replaceAll(/enter/g, "e")
    .replaceAll(/imes/g, "i")
    .replaceAll(/ai/g, "a")
    .replaceAll(/ober/g, "o")
    .replaceAll(/ufat/g, "u");

    document.getElementById('div-mensagem').innerHTML = resultadoDescripto;
}

function copiar() {
    const textoCopiar = document.getElementById("div-mensagem");

    textoCopiar.select();
    document.execCommand('copy');
    alert('Texto copiado');
}

/*let test = "texto teste";
let testCriptografado = "tenterxtober denter tenterstenter";

console.log(criptografar(test));
console.log(descriptografar(testCriptografado));*/