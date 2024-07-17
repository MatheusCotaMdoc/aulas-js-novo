

document.querySelector('#btn').addEventListener('click', () =>{ 
    const x = Math.floor(Math.random() * 256)
    const y = Math.floor(Math.random() * 256)
    const z = Math.floor(Math.random() * 256)

document.querySelector("body").style.backgroundColor = "#" + x + y + z;

})