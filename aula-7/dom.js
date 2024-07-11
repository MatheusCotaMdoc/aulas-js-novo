const paragrafo = document.createElement("p")
// <p> </p>

paragrafo.innerHTML = "Isso é um paragrafo"

//<p> Isso é um paragrafo

//adotar
document.body.appendChild(paragrafo)
//desadotar
document.body.removeChild(paragrafo)