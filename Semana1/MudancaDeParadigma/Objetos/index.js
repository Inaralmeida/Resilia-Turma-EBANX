var submit = document.querySelector("#submit");
var acoes = document.querySelector("#acoes");
var dog = {
  nome: "",
  aniversario: "",
  latir: function () {
    acoes.innerText = "O Dog latiu";
  },
  comer: function () {
    acoes.innerText = "O Doc comeu";
  },
  mostarObjeto: function () {
    console.log(dog);
  },
};
submit.addEventListener("click", function (event) {
  var nome = document.querySelector("#nome");
  var aniversario = document.querySelector("#data-aniversario");

  dog.aniversario = aniversario;
  dog.nome = nome;
});

var latir = document.querySelector("#latir");
latir.addEventListener("click", function (event) {
  event.preventDefault();
  dog.latir();
});
// Zicão
// ATRIBUTOS:
// RAÇA, COR, PORTE,IDADE, NOME, PERSONALIDADE,TEMPERAMENTO, ADESTRADO, CASTRADO,

//MÉTODOS:
//CORRER, PULAR, DAR A PATINHA, LATIR, COMER, BRINCAR, DORMIR, PASSEAR, TOMAR AGUA, MORDER.
