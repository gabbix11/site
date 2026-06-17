const texto = "AKUMA";
const nome = document.getElementById("nome");

let i = 0;

function escrever() {
    if (i < texto.length) {
        nome.innerHTML += texto.charAt(i);
        i++;

        setTimeout(escrever, 200);
    }
}

escrever();