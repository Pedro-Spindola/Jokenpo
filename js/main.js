var elementos = document.querySelectorAll('.player_one div > img');

for(var i = 0; i < elementos.length; i++)
{
    elementos[i].addEventListener('click',function()
    {
        alert('clicado!');
    });
}