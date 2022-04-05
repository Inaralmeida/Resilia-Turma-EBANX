// 1 - Criação
var requisicao = new XMLHttpRequest();

// 2 - configuração
requisicao.open("GET", "https://pokeapi.co/api/v2/pokemon/pikachu");

// tratamento de eventos
requisicao.onload = function () {
  if (requisicao.status == 200) {
    var respostaReq = JSON.parse(requisicao.response);
    var nome = respostaReq.name;
    var span = document.querySelector("span");
    span.innerText = nome;
  } else {
    console.log(requisicao);
  }
};

//3 - ENVIO
requisicao.send();
