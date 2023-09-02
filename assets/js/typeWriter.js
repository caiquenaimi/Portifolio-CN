var i = 0;
var txt = 'Sempre buscando aprendizado e mantendo o foco em entrar no mercado de trabalho.';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typewriter").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}