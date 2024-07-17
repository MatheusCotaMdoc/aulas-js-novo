const BASE_URL = "http://localhost:8080";

window.onload = function () {

    const parametros = (new URL(document.location)).searchParams;
    const idAtual = parametros.get('id');

    var salvarBotao = document.getElementById("salvar");
    salvarBotao.addEventListener("click", (event) => {
        event.preventDefault();

        const formElement = document.querySelector('form#formulario');

        const formData = new FormData(formElement);
        const form = Object.fromEntries(formData.entries());
        const requestBody = {
            apartment: form.apartment,
            block: form.block,
            brandCar: form.brandCar,      
            colorCar: form.colorCar,
            licensePlateCar: form.licensePlateCar, 
            modelCar: form.modelCar, 
            parkingSpotNumber: form.parkingSpotNumber, 
            responsibleName: form.responsibleName 
        }
        
        let metodo = 'POST';
        let url = `${BASE_URL}/parking-spot`;

        if (idAtual != null) {
            metodo = 'PUT';
            url += `/${idAtual}`;
        }

        const requestOptions = {
            method: metodo,
            body: JSON.stringify(requestBody),
            headers: { "Content-type": "application/json; charset=UTF-8"}
        }
        
        fetch(url, requestOptions)
        .then((res) => {
            if (res.ok) {
                alert('Salvo com sucesso!');
                window.location.href = 'home.html';
            } else {
                alert('Houve um erro.')
            }
        });
    });

    

    if(idAtual !== null) {
        
        fetch(`${BASE_URL}/parking-spot/${idAtual}`)
        .then((res) => res.json())
        .then((vaga) => {
            

            var apartment  = document.getElementById('apartment');
            apartment.value = vaga.apartment;

            var block = document.getElementById('block');
            block.value = vaga.block;

            var brandCar = document.getElementById('brandCar');
            brandCar.value = vaga.brandCar;

            var colorCar = document.getElementById('colorCar');
            colorCar.value = vaga.colorCar;

            var licensePlateCar = document.getElementById('licensePlateCar');
            licensePlateCar.value = vaga.licensePlateCar;

            var modelCar = document.getElementById('modelCar');
            modelCar.value = vaga.modelCar;

            var parkingSpotNumber = document.getElementById('parkingSpotNumber');
            parkingSpotNumber.value = vaga.parkingSpotNumber;

            var responsibleName = document.getElementById('responsibleName');
            responsibleName.value = vaga.responsibleName;

            var spanId = document.getElementById('vaga-id');
            spanId.innerText += vagaAtual.id;
            spanId.style.display = 'block';


        });                       
    }
}