/*
Altere a resposta da Questão 1 para alterar o tamanho da fonte de todos os textos da página para um 
valor definido pelo aluno, quando o usuário clica no botão.

Faça com que a cor de fundo da página seja alterada para uma cor definida pelo aluno quando o usuário pressiona
 "Enter" no primeiro input da página.
*/
const VelI = document.getElementById('VelI');
const VelF = document.getElementById('VelF');
const Acel = document.getElementById('Acel');
const btn = document.querySelector ('button');
const h1 = document.querySelector ('h1');
const body = document.querySelector('body');

const inp = document.querySelectorAll('input');
inp.forEach((el)=>{
    el.style.fontFamily = 'rubik';
    el.style.fontSize = '15px';
});

body.style.fontFamily = 'rubik';
body.style.fontSize = '30px';
body.style.backgroundColor = '#B2E7E8';
body.style.position

btn.style.fontFamily = 'rubik';
btn.style.borderRadius = '10px';
btn.style.border = '1px';
btn.style.width = "80px";
btn.style.height = "50px";



VelI.addEventListener('keydown', function(e) {
    switch (e.code) {
        case 'Enter':
            body.style.backgroundColor = '#1E90FF';
    }
});

btn.addEventListener("click", function() {

    body.style.fontSize = '50px';

    const Vi = VelI.value;
    const Vf = VelF.value;
    const a = Acel.value
    const T = (Vf - Vi)/a;

    if (T > 100) {
        h1.innerText = "Recorde superado";
    } 
    else {
        h1.innerText = "Tempo insuficiente";
    }
});