const saldos = [120.54, 0, 5.29, -72, 13, -25.3];

const saldosDecrementados = saldos.map((saldo) =>
  saldo < 0 ? saldo - 10 : saldo
);

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosVezes5 = numeros.map((numero) => `5 X ${numero}= ${5 * numero}`);
// console.log(numerosVezes5);

const idades = [25, 36, 10, 15, 28, 14, 36];

const maiorDeIdade = idades.map((idade) =>
  idade >= 18 ? "Maior de idade" : idade
);
// console.log(maiorDeIdade);

const dogs = [
  { nome: "Pluto", idade: 2 },
  { nome: "Zeus", idade: 3 },
  { nome: "Belinha", idade: 5 },
  { nome: "Thor", idade: 1 },
  { nome: "Fofinha", idade: 4 },
];

const nomeDosDogs = dogs.map((dog) => document.write(dog.nome));
console.log(nomeDosDogs);
