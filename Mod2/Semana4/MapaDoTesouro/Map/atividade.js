const users = [
  {
    nome: "Abraão Farias",
    idade: 22,
    animal: "gato",
  },
  {
    nome: "Michelina Souza",
    idade: 12,
    animal: "Hamster",
  },
  {
    nome: "Venâncio Almeida",
    idade: 45,
    animal: "",
  },
  {
    nome: "Maria Silva",
    idade: 15,
    animal: "Coelho",
  },
  {
    nome: "José Eustáquio",
    idade: 32,
    animal: "Gato",
  },
];

function abreviaNome(nome) {
  const primeiraLetra = nome[0];
  const posicaoDoEspaco = nome.indexOf(" ");
  const segundaLetra = nome[posicaoDoEspaco + 1];
  return `${primeiraLetra}.${segundaLetra}`;
}

const nomes = users.map((user) => user.nome);
console.log(nomes);

const nomeAbrev = users.map((user) => abreviaNome(user.nome));
console.log(nomeAbrev);
