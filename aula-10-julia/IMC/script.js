//  TROCAR IMAGENS
//utilizar setAtribute
//file parametro para função para relacionar a função com o filname, para puxar a imagem do html


function selectGenero(){
    //selecionar o select
    const select = document.querySelector('select')
    //fazer uma condição onde se o valor do select for feminino o conteudo da imagem tera o src de girl
    if(select.value === "feminino"){
        document.querySelector(".image").setAttribute('src',"/cursoJS-basico-master/aula10/IMC/imagens/girl.png")
    }//Caso o contrário ele terá o valor da imagem de boy
    else if(select.value === "masculino"){
        document.querySelector(".image").setAttribute('src', "/cursoJS-basico-master/aula10/IMC/imagens/boy (1).png")
    }
}



document.querySelector('button').addEventListener('click', () =>{
    //selecionar o nome
    const nome = document.querySelector('#name').value
    //selecionar o valor digitado na altura 
    const altura = Number(document.querySelector('#altura').value)
    //selecionar o valor digitado no peso
    const peso = Number(document.querySelector('#peso').value)
    //fazer o calculo
    const IMC = (peso/altura)*altura
    document.getElementById('resultado').innerHTML = IMC
    document.getElementById('nome').innerHTML=(nome)

    if(IMC > 18.5){
        document.getElementById('estado').innerHTML = "Você está abaixo do peso."
    }
    else if(IMC >= 18.5 || IMC === 24.9){
        document.getElementById('estado').innerHTML = "Você está com o peso normal!"
    }
    else if(IMC <= 25 && IMC > 29.9){
        document.getElementById('estado').innerHTML = "Você está com Sobrepeso."
    }
    else if(IMC <= 30 && IMC > 39.9){
        document.getElementById('estado').innerHTML = "Você está com Obesidade."
    }
    else if(IMC > 40){
        document.getElementById('estado').innerHTML = "Você está com Obesidade Grave."
    }
})