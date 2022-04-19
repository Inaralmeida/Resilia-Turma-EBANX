const dog = {
  _nome: "Pluto",
  getNome: function () {
    return this._nome;
  },
  setNome: function (novoNome) {
    if (this._validaNome(novoNome)) this._nome = novoNome;
  },
  _validaNome: function (novoNome) {
    return typeof novoNome === "string" ? true : false;
  },
};

dog.getNome();
dog.setNome("Zeus");
