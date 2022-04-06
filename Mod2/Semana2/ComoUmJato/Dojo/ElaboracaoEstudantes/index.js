var nomes = ["Max", "Mel", "Sol"];
var peso = [35.2, 18.6, 2.5];
var raca = ["Labrador", "Vira latas", "Chiuaua"];

function latir(nome) {
  for (var i = 0; i < nomes.length; i++) {
    alert("nome[i] " + "auau");
  }
}
latir();
// function rosnar
function fabricaDog(nomes, peso, raca) {
  for (var i = 0; i < nomes.length; i++) {
    var cachorro = {
      nome: nomes[i],
      peso: peso[i],
      raca: raca[i],
      getNome: function () {
        return this.nome;
      },
      getPeso: function () {
        return this.peso;
      },
      getRaca: function () {
        return this.raca;
      },
    };
  }
}
