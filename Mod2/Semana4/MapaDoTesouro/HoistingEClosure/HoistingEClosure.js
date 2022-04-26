//HOISTING
//exemplo 1: função sendo içada para utilização

console.log(soma(2, 2));

function soma(num1, num2) {
  return num1 + num2;
}

//exemplo 2: declaração de variável sendo içada (undefined)

var empresa = "Resilia";
console.log(empresa + " " + curso);
var curso = "Webdev";

//closure

function mae() {
  this.nome = "Função mãe";
  function filha() {
    console.log("Rodando função filha");
    console.log(`Nome do escopo da mãe: ${this.nome}`);
  }
  filha();
}

mae();
try {
  filha();
} catch (error) {
  console.log("Essa função não existe no escopo global!");
}
