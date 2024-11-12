/*
Um determinado recorde de velocidade é batido apenas se o tempo de chegada, dadas a variação da velocidade e sua aceleração, 
for maior que 60 minutos. Faça uma aplicação que recebe a velocidade inicial (Vi), a velocidade final (Vf) e a aceleração (a) 
e calcula o tempo final da aceleração (T):

T = (Vf - Vi)/a

Escreva na página "Recorde superado" se T > 100; e "Tempo insuficiente", caso contrário.
*/ 

const VelI = document.getElementById('VelI');
const VelF = document.getElementById('VelF');
const Acel = document.getElementById('Acel');
const btn = document.querySelector ('button');
const h1 = document.querySelector ('h1');
const body = document.querySelector ('body');

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


btn.addEventListener("click", function() {

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