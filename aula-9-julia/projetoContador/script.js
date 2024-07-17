// selecionar o botão de adicionar e adicionar o evento de click
document.querySelector(".addition").addEventListener('click', () =>{
    //pegar o conteudo do P e fazer com que some mais 1 a cada click
    document.getElementById("texto").innerHTML = Number(texto.innerText)+1
    
})

document.querySelector(".subtraction").addEventListener('click', () =>{
    //pegar o conteudo do P e fazer com que some mais 1 a cada click
    document.getElementById("texto").innerHTML = Number(texto.innerText)-1
    
})