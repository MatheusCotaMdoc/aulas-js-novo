//criar um paragráfo fora pois se não estiver na condição ele será removido
const paragrafo = document.createElement('p');
function desabilitar() {
    // selecionar o que quero desabilitar
    const input = document.querySelector('input');
    //slecionar a tag de seleção
    const select = document.getElementById('selecao');
    
    // Verifica se o valor selecionado no select é "desabilitar"
    if (select.value === "desabilitar") {
        // se for igual usar o disable para desabilitar 
        input.disabled = true;
        //criar um paragráfo cujo o texto é deasabilitado
        paragrafo.innerText = "DESABILITADO";
        // mudar ac cor e seu backgroundColor
        paragrafo.style.backgroundColor = "red";
        paragrafo.style.color = "white";

        // Adiciona o parágrafo após o input fazendo com que ele se relacione com o pai
        input.parentNode.appendChild(paragrafo);
    }
     else {
        // Se não estiver desabilitado, habilita o input e remove o parágrafo
            paragrafo.parentNode.removeChild(paragrafo);
            input.disabled = false
    }
}
