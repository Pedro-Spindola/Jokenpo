const popup = document.querySelector('.popup')
const finalizar = document.querySelector('.modal input[name=conf]')
const nome = document.querySelector('.modal input[name=mynome]')
const nome_jogador = document.querySelector('.nome_jogador');


setTimeout(function(){
    popup.style.display = 'block'
}, 100);

finalizar.addEventListener('click', function(){
    popup.style.display = 'none'
    const value = nome.value
    nome_jogador.innerHTML = value
})

