// esse ja esta funcionando...
/*function adicionar(){

const conteudo = document.querySelector('.campo').value

const paragrafo = document.createElement("p")

paragrafo.innerHTML = conteudo

document.body.appendChild(paragrafo)
}*/

const enviarNome = document.querySelector('input')

enviarNome.addEventListener('keydown', (event) => {

    if (event.key === 'Enter') {
    //pegando o input
    const input = document.querySelector('input')
    //pegando o valor de input
    const nome = input.value
    //limpando o campo
    input.value = ""
    //criando elemento p
    const nomeUsuario = document.createElement('p')
    //pegar o elemento e colocar o texto da variavel nome
    nomeUsuario.innerText = nome
    document.body.appendChild(nomeUsuario)
    }
   
})