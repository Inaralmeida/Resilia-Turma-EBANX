// const tipoDeConta = prompt("Tipo de conta");

// switch (tipoDeConta) {
//   case "poupança":
//     console.log("Taxa de juros: 0.3 a.m");
//     break;
//   case "corrente":
//     console.log("Taxa de juros: 0.7 a.m");

//     break;
//   case "estudante":
//     console.log("Taxa de juros: 0.1 a.m");
//     break;
//   default:
//     console.log("Tipo de conta inválido");
// }

//TERNÁRIO
const idade = 28;
const ehMaiorDeIdade = idade >= 18 ? "Sim" : "Não";
console.log(ehMaiorDeIdade);
const minhaAposta = 0712201;
const numerosSorteados = 5579642;
const reesultadoAposta =
  minhaAposta === numerosSorteados ? "Fiquei milhonaria" : "Nada mudou";

calculaMedia("Matheus", 7, 9, 4, 10);
calculaMedia("Duda", 7, 9, 4, 10, 7, 10, 3, 4);

function calculaMedia(nome, ...notas) {
  let somaTotal = 0;
  for (let i = 0; i < notas.length; i++) {
    somaTotal += notas[i];
  }
  const media = somaTotal / notas.length;
  console.log(`Estudante: ${nome}, Média: ${media}`);
  console.log(...notas);
}

// SPREAD

const carro = {
  placa: "sdc2a864",
  chassi: "12378546578741321354",
  cor: "Preto",
  modelo: "IX35",
  ano: 2019,
};

const pessoa = {
  nome: "Rariscreuda",
  idade: 35,
  sobrenome: "Marcia",
  cpf: 65214987355,
};

const registroVenda = {
  ...pessoa,
  ...carro,
};
console.log(registroVenda);
