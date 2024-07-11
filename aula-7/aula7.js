/*function acenderLampada(){
    document.querySelector(".lampada").src = "img/cloud.png"
    
}

function apagarLampada(){
    document.querySelector(".lampada").src = "img/sephirot.jfif"
    
}*/

function trocarImagem(filename){
    document.querySelector('#personagem').setAttribute('src','img/'+filename)
    document.querySelector('#personagem').setAttribute('data-personagem',personagemNome)

}
function pegarPersonagem(){
    let personagem = document.querySelector('#personagem').getAttribute('data-personagem')
    alert("O personagem é "+personagem)
}
