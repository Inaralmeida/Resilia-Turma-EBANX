var dog = {
  nome: "pluto",
  raca: "vira lata",
  porte: "medio",
  getNome: function () {
    return this.nome;
  },
  getRaca: function () {
    return this.raca;
  },
  getPorte: function () {
    return this.porte;
  },
  setNome: function (novoNome) {
    this.nome = novoNome;
  },
  setRaca: function (novaRaca) {
    this.raca = novaRaca;
  },
  setPorte: function (novoPorte) {
    this.porte = novoPorte;
  },
  alterarInformacoes: function (novoNome, novaRaca, novoPorte) {
    this.setNome(novoNome);
    this.setRaca(novaRaca);
    this.setPorte(novoPorte);
  },
};

console.log(dog.getNome());
