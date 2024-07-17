//selecionar o conteudo do botão
//ao clique pegar o conteudo de cada input e transformar em uma lista
// criar um paragrafo para essa lista aparecer
//criar um botão para remover caso seja preciso
function newAddress(event){
    //pegando o conteudo da ul
const list = document.querySelector('#list');
// pegando o conteudo dos inputs
const area =document.getElementById('area');
const number = document.getElementById('number');
const bairro = document.getElementById('bairro');
const cidade = document.getElementById('cidade');
//criando um li
const address = document.createElement('li');
//conteudo da li
const content =`Endereço: ${area.value}M², número ${number.value} (${bairro.value} - ${cidade.value})`
// relacionando o texto do conteudo do li criado
address.innerHTML = content
//anexando o botão a li
address.appendChild(deleteAddress())
//relacionando o novo elemento criado a lista
list.appendChild(address)
// limpando o campo
area.value =""
number.value =""
bairro.value =""
cidade.value =""


}
document.querySelector("button").addEventListener('click', newAddress);
function deletar(event){
    //criar um alvo sobre o elemento
    const buttonRemover = event.target
    // acessando o pai do elemento no caso a li
    const removeAddress = buttonRemover.parentElement
    //remover elemento
    removeAddress.remove()
}

function deleteAddress (event) {
    //criar um novo botão
    const buttonRemover = document.createElement("button")
    //adicionar um texto a esse botão
    buttonRemover.innerHTML = ' remover'
    //adiconando um evento de clik a ele
    buttonRemover.addEventListener('click', deletar)
    //retornar para o botão aparecer
    return buttonRemover
    
}

