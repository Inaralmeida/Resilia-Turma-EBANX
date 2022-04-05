//Guarda o elemento que tem o id gatilho-evento (Tag h1)
var gatilho = document.getElementById("gatilho-evento");

//Guarda o elemento que tem o id nome-evento (Tag p)
var nomeDoEvento = document.querySelector("#nome-evento");

//
gatilho.addEventListener("click", function () {
  nomeDoEvento.innerText = "click";
});

gatilho.addEventListener("dblclick", function () {
  nomeDoEvento.innerText = "dblclick";
});

gatilho.addEventListener("scroll", function () {
  console.log();
});
