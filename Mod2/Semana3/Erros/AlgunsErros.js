const mochila = {
  dono: "Inara",
  estado: "novo",
  itens: ["estojo", "caderno", "lancheira"],
  nome: "Rariscreuda",
};

//Erro 1 - Alterar as propriedades de algo que não existe

console.log(mochila.nome);

//Erro 2 - sintaxe

class Carro {
  constructor(cor, modelo, ano) {
    (this.cor = cor), (this.modelo = modelo), (this.ano = ano);
  }
}

//Erro 3 - Referencia
const nomeDoEstudante = "José";

console.log(nomeDoEstudante);
