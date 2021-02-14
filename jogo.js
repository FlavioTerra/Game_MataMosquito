var largura
var altura
var vidas = 1
var tempo = 30
var criaMoscaTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

switch(nivel)
{
    case 'normal':
        criaMoscaTempo = 1500
        break
    case 'dificil':
        criaMoscaTempo = 1000
        break
    case 'chucknorris':
        criaMoscaTempo = 750
        break
}

function ajustaTamanhoPalcoJogo(){
    largura = window.innerWidth
    altura = window.innerHeight
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
    
    tempo--
    if(tempo < 0)
    {
        clearInterval(cronometro)
        clearInterval(criacaoDaMosca)
        window.location.href = 'vitoria.html'
    }
    else
        document.getElementById('cronometro').innerHTML = tempo
}, 1000)

function posicaoRandomica()
{
    //Remove mosquito caso exista
    if(document.getElementById('idMosca'))
    {
        if(vidas > 3)
            window.location.href = 'fim_de_jogo.html'
        else
        {
            document.getElementById('idMosca').remove()
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            vidas++
        }
    }
    
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //Criar elemento html
    var criaMosca = document.createElement('img')
    criaMosca.src = 'imagens/mosca.png'
    criaMosca.className =  tamanhoAleatorio() + ' ' + ladoRandomico()
    criaMosca.style.left = posicaoX + 'px'
    criaMosca.style.top = posicaoY + 'px'
    criaMosca.style.position = 'absolute'
    criaMosca.id = 'idMosca'

    criaMosca.onclick = function(){
        this.remove()
    }

    //Gera o mosquito no jogo
    document.body.appendChild(criaMosca)
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe)
    {
        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:
            return 'mosca3'
    }
}

function ladoRandomico(){
    var lado = Math.floor(Math.random() * 2)

    switch(lado)
    {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
