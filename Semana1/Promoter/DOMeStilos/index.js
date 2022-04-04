function vermelho() {
  var nomeTema = document.querySelector("#nome-tema");
  var tema = document.querySelector("#tema");

  tema.style.backgroundColor = "red";
  tema.style.color = "#f2f2f2";
  nomeTema.innerText = "Vermelho";
}

function verde() {
  var nomeTema = document.querySelector("#nome-tema");
  var tema = document.querySelector("#tema");

  tema.style.backgroundColor = "green";
  tema.style.color = "#ffb200";
  nomeTema.innerText = "verde";
}

function azul() {
  var nomeTema = document.querySelector("#nome-tema");
  var tema = document.querySelector("#tema");

  tema.style.backgroundColor = "blue";
  nomeTema.innerText = "azul";
}
