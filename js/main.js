var elementos = document.querySelectorAll('.player_one div > img');
var playerOpt = "";
var iaOpt = "";
var pontosJogador = "0";
var pontosIA = "0";
var contadorJog = document.querySelector('.placa_one')
var contadorIa = document.querySelector('.placa_ia')

function validarVitoria(){
    
    let vencedor = document.querySelector('.vencedor');
    const nome = document.querySelector('.modal input[name=mynome]');
    const nome_jogador = document.querySelector('.nome_jogador');
    const value = nome.value
    nome_jogador.innerHTML = value

    if(playerOpt == "papel"){

        if(iaOpt == "papel"){
            vencedor.innerHTML = "O jogo foi empatado";
        }else if(iaOpt == "tesoura"){
            vencedor.innerHTML = "O inimigo ganhou";
            pontosIA++
        }else if(iaOpt == "pedra"){
            vencedor.innerHTML = "O "+nome+" ganhou";
            pontosJogador++
        }
    }
    if(playerOpt == "tesoura"){

        if(iaOpt == "papel"){
            vencedor.innerHTML = "O player ganhou";
            pontosJogador++
        }else if(iaOpt == "tesoura"){
            vencedor.innerHTML = "O jogo foi empatado";
        }else if(iaOpt == "pedra"){
            vencedor.innerHTML = "O inimigo ganhou";
            pontosIA++
        }
    }
    if(playerOpt == "pedra"){
    
        if(iaOpt == "papel"){
            vencedor.innerHTML = "O inimigo ganhou";
            pontosIA++
        }else if(iaOpt == "tesoura"){
            vencedor.innerHTML = "O player ganhou";
            pontosJogador++
        }else if(iaOpt == "pedra"){
            vencedor.innerHTML = "O jogo foi empatado";
        }
    }

    contadorJog.innerHTML = pontosJogador
    contadorIa.innerHTML = pontosIA

}

function resetOpacityIa(){
    const elementosInimigo = document.querySelectorAll('.player_ia div');
    for( var i = 0; i < elementosInimigo.length; i++){
        elementosInimigo[i].childNodes[0].style.opacity = 0.2;
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
elementos[i].style.opacity = 0.2;
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