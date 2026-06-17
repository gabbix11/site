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

const frases = [
    "👹 Bem-vindo ao covil do Akuma.",
    "💀 O Entity está observando.",
    "🎮 Sobreviva primeiro. Reclame depois.",
    "🔥 O medo é apenas o começo.",
    "🌙 Nem todo monstro é o killer.",
    "🎥 Obrigado por visitar meu perfil."
];
const frase = document.getElementById("frase");

const aleatoria = Math.floor(Math.random() * frases.length);

frase.textContent = frases[aleatoria];

particlesJS("particles-js", {
    particles: {
        number: {
            value: 70
        },

        color: {
            value: "#cb14dc"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3
        },

        move: {
            enable: true,
            speed: 1.5
        }
    },

    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            }
        },

        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.8
                }
            }
        }
    }
});