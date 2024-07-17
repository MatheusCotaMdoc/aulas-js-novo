//selecionar o conteudo do botão
const buttonNew = document.querySelector("[data-form-button")


function newTask(event){
    //previne a atualização da pagina
    event.preventDefault()
    //pegando a lista
    const list = document.querySelector("[data-list]")
    //selecionar o input e pagar o valor de dentro do input
    const input = document.querySelector("[data-form-input]")
    //ciar elemento li
    const task = document.createElement('li')
    task.classList.add('task');
    //criando um paragrafo, criar um modelo de template de interpolação ( template string)
    const content = `<p class="content">${input.value}</p>`
    //em seguida pegamos o conteudo do elemento
    task.innerHTML = content
    //anexando o botão ao li
    task.appendChild(botao())
    task.appendChild(deleteTask())
    //anexando li a lista
    list.appendChild(task)
    //limpar o campo apos digitação
    input.value=" "
    
}
//interagir com  o botão adicionando o evento de click ao botão
//e fazer sua função ao clique
buttonNew.addEventListener('click',newTask)
const botao= () => {
    //criar um botão
    const buttonConclui = document.createElement("button")
    //adcionando a class nele
    buttonConclui.classList.add('check-button')
    // colocando texto no botão
    buttonConclui.innerHTML = 'concluir'
    buttonConclui.addEventListener('click', concluirTask)
    return buttonConclui
}


//função para concluir tarefa
const concluirTask = (event) =>{
    //criar um "alvo" sobre o botão
    const buttonConclui = event.target
    // acessar o li que esta fora do botão acessa o elemento que esta acima ( subir um nó n aarvore dom)
    const taskComplete = buttonConclui.parentElement
    //adicionar ou retirar o estilo quando for clicado 
    taskComplete.classList.toggle('done')
}


// função para deletar a tarefa
const deletarTask = (event) =>{
    // criar um "alvo sobre o botão"
     const deleteButton = event.target
     //acessar o pai do elemento do botão a li
    const removeTask = deleteButton.parentElement
    // remover esse elemento
    removeTask.remove()
}
//associar esse botão a task la em cima
const deleteTask = () =>{
    // criar um botão
    const deleteButton = document.createElement("button")
    //adicionar a classe para stilizar ele
    deleteButton.classList.add('check-button')
    //colocar o texto que terá o botão
    deleteButton.innerHTML = 'deletar'
    //adicionar o evento de click
    deleteButton.addEventListener('click', deletarTask)
    //retornar o botão
    return deleteButton
}