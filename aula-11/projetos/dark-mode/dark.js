
/*
document.querySelector('#btn').addEventListener('click', () =>{ 
    if (document.querySelector('.body').style.backgroundColor == "white"){
        document.querySelector('.body').style.backgroundColor = "black"
    } else {
        document.querySelector('.body').style.backgroundColor = "white"
    }
})
*/
//classlist
function trocar(){
    let troca = document.body
    troca.classList.toggle("dark-mode")
}