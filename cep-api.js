'use strict';
const LimparFormulario = (json) => {
    document.getElementById("cep").value = '';
    document.getElementById("estado").value = '';
    document.getElementById("cidade").value = '';
    document.getElementById("bairro").value = '';
    document.getElementById("endereco").value = '';
}

const PreencherFormulario = (json) => {
    document.getElementById("cep").value = json.cep;
    document.getElementById("estado").value = json.state;
    document.getElementById("cidade").value = json.city;
    document.getElementById("bairro").value = json.neighborhood;
    document.getElementById("endereco").value = json.street;
}

const PesquisarCEP = async() => {
   const cep = document.getElementById('cep').value;
   const url = `https://brasilapi.com.br/api/cep/v2/${cep}`;
   const dados = await fetch(url);
    const json = await dados.json();


    document.getElementById("cep").value = json.cep;
    document.getElementById("estado").value = json.state;
    document.getElementById("cidade").value = json.city;
    document.getElementById("bairro").value = json.neighborhood;
    document.getElementById("endereco").value = json.street;



  //  PreencherFormulario(json);
}

document.getElementById('cep')
        .addEventListener('focusout', PesquisarCEP);
