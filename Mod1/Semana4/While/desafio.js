//Pergunte o nome do usuário
//Quantas garfadas serão necessárias pra terminar o prato
//Cada garfada precisa de quantas mastigadas
//para cada garfada exiba em um h2 "Garfada <numero da grafada>"
//para cada mastigada exiba em uma li "mastigada <numero da mastigada>"
//Após cada sequencia de mastigadas exiba em um p"Engoliu"
//Após todas as garfadas exiba em um h3"<nome> Terminou o prato"

//criar function mastigar
//para cada numero de 1 até o numero de mastigadas preciso exibir li com o numero atual

//

var nome = prompt("Qual é teu nome?");
var nGarfadas = prompt("Quantas garfadas percisa para terminar o prato?");
var nMastigadas = prompt("Quantas mastigadas por garfada"); //5

function mastigar() {
  var nAtualDaMastigada = 1;

  while (nAtualDaMastigada <= nMastigadas) {
    document.write(`<li> Mastigada numero ${nAtualDaMastigada}</li>`);
    nAtualDaMastigada++;
  }
}

function garfada() {
  var nAtualDaGarfada = 1;

  while (nAtualDaGarfada <= nGarfadas) {
    document.write(`<h2> Garfada ${nAtualDaGarfada}</h2>`);
    mastigar();
    document.write("Engoliu");
    nAtualDaGarfada++;
  }

  document.write(`<h3>Terminou o prato </h3>`);
}

garfada();
