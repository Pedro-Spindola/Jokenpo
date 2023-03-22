var elementos = document.querySelectorAll('.player_one div > img');
var playerOpt = "";
var iaOpt = "";
var pontos1 = "";
var pontos2 = "";
function validarVitoria(){
    
    let vencedor = document.querySelector('.vencedor');

    if(playerOpt == "papel"){

        if(iaOpt == "papel"){
            vencedor.innerHTML = "O jogo foi empatado";
        }else if(iaOpt == "tesoura"){
            pontos2 = 1
            vencedor.innerHTML = "O inimigo ganhou";
        }else if(iaOpt == "pedra"){
            pontos1 = 1
            vencedor.innerHTML = "O player ganhou";
        }
    }
    if(playerOpt == "tesoura"){

        if(iaOpt == "papel"){
            vencedor.innerHTML = "O player ganhou";
        }else if(iaOpt == "tesoura"){
            vencedor.innerHTML = "O jogo foi empatado";
        }else if(iaOpt == "pedra"){
            vencedor.innerHTML = "O inimigo ganhou";
        }
    }
    if(playerOpt == "pedra"){
    
        if(iaOpt == "papel"){
            vencedor.innerHTML = "O inimigo ganhou";
        }else if(iaOpt == "tesoura"){
            vencedor.innerHTML = "O player ganhou";
        }else if(iaOpt == "pedra"){
            vencedor.innerHTML = "O jogo foi empatado";
        }
    }
    alert(pontos1);
    alert(pontos2);
}

function resetOpacityIa(){
    const elementosInimigo = document.querySelectorAll('.player_ia div');
    for( var i = 0; i < elementosInimigo.length; i++){
        elementosInimigo[i].childNodes[0].style.opacity = 0.3;
    }
}

function inimigoJogar(){
    let rand = Math.floor(Math.random()*3);

    const elementosInimigo = document.querySelectorAll('.player_ia div');
    resetOpacityIa();
    for( var i = 0; i < elementosInimigo.length; i++){
        if(i == rand){
            elementosInimigo[i].childNodes[0].style.opacity = 1;
            iaOpt = elementosInimigo[i].childNodes[0].getAttribute('opt');
        }
    }
    validarVitoria();
}   

function resetOpacityPlayer(){
for(var i = 0; i < elementos.length; i++){  
elementos[i].style.opacity = 0.3;
}
}

for(var i = 0; i < elementos.length; i++){ 
elementos[i].addEventListener('click',function(t){
    resetOpacityPlayer();
    t.target.style.opacity = 1;
    playerOpt = t.target.getAttribute('opt');
    inimigoJogar();
});
}