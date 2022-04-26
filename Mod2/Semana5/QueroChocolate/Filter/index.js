const users = [
  {
    nome: "Abraão Farias",
    idade: 22,
    animal: "gato",
    categoria: "eletronicos",
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

const amantesDeGatos = users.filter(
  (user) => user.animal.toUpperCase() === "GATO"
);
console.log(amantesDeGatos);

const maioresDeIdade = users.filter((user) => user.idade >= 18);
console.log(maioresDeIdade);
