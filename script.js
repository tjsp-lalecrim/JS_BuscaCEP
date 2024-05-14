function consultarCEP() {
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.erro) {
            alert("CEP não encontrado. Por favor, verifique o CEP digitado.");
        } else {
            document.getElementById("logradouro").value = data.logradouro;
            document.getElementById("bairro").value = data.bairro;
            document.getElementById("cidade").value = data.localidade;
            document.getElementById("estado").value = data.uf;
        }
    })
    .catch(error => {
        console.error('Erro na consulta de CEP:', error);
        alert("Ocorreu um erro na consulta de CEP. Por favor, tente novamente.");
    });
}

document.getElementById("cep").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        consultarCEP();
    }
});
