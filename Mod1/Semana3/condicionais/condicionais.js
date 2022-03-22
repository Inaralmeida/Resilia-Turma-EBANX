/*
    typeof boolean == true(vedadeiro) ou  false (falso)
*/
var num1 = 25;
var string1 = "25";
var num2 = 34;

var nomeMinusculo = "ebanx";
var nomeMaiusculo = "EBANX";

console.log("oi");
// Igual - ==
console.log(num1 == num2);
console.log("string == number", num1 == string1);
console.log("string === number", num1 === string1);

// Maior ou igual - >=
console.log(num1 >= num2);

//menor ou igual - <=
console.log(num1 <= num2);
// maior que - >

console.log(num1 > num2);
//menor que - <
console.log(num1 < num2);
// estritamente igual - ===
console.log(nomeMaiusculo == nomeMinusculo);
// diferente - !=
console.log(num1 != num2);
// estritamente diferente - !==
console.log(num1 !== num2);

var preco = 1900;

if (preco <= 1900) {
  console.log("Eu compro a TV");
} else {
  console.log("Deixa pra proxima");
}
