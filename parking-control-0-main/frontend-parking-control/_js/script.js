const BASE_URL = "http://localhost:8080";


function carregarLista(){
    fetch(`${BASE_URL}/parking-spot?sort=registrationDate,DESC`)
    .then((res) => res.json())
    .then((data) => criarLinhas(data.content))

}

function criarLinhas(json){
    var tableHtml = "";

    for (var vaga of json){
        tableHtml += `<tr>
                        <td>${vaga.parkingSpotNumber}</td>
                        <td>${vaga.licensePlateCar}</td>
                        <td>${vaga.responsibleName}</td>
                        <td>${vaga.registrationDate}</td>
                        <td>
                        <a href="formulario.html?id=${vaga.id}">
                            <buttom class="btn-formulario-novo">Editar</buttom>
                        </a>
                        </td>
                        <td>
                            <a class="btn-formulario-novo" onclick="excluirVaga('${vaga.id}')">Excluir</a>
                        
                        </td>
                    </tr>
            `;
    }

    var tableBody = document.getElementById("list");
    tableBody.innerHTML = tableHtml;

}

function excluirVaga(vagaId) {
    const requestOptions = {
        method: 'DELETE'
    }

    const confirmado = confirm('Tem certeza que deseja excluir?');
            
    if(confirmado) {
       
        fetch(`${BASE_URL}/parking-spot/${vagaId}`, requestOptions)
        .then((res) => {
            if(res.status === 200) {
                alert('Vaga excluída com sucesso!');
                carregarLista();
            
                
            }
        });

    
    }
}

function buscarVaga(){
    var valor = document.getElementById("buscar").value;
    fetch (`${BASE_URL}/parking-spot/filter?page=1&size=5&sort=registrationDate,ASC&value=${valor}`)
    .then((res) => res.json())
    .then((data) => criarLinhas(data.content));
}

