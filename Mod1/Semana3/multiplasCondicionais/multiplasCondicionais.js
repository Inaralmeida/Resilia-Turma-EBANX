/*
    só fazemos dois tipos de pizza, Marguerita e Quatro queijos,
    se o sabor da pizza pedida for marguerita ou quatro queijos  fazemos, caso contrário informamos que o sabor não está disponível
*/

var saborDaPizza = prompt("Qual sabor de pizza você deseja?");
console.log(saborDaPizza);

var dia = "quarta";

if (saborDaPizza == "Marguerita") {
  console.log("Pizza Marguerita sendo preparada");
} else if (saborDaPizza == "Quatro Queijos") {
  console.log("Pizza Quatro Queijos sendo preparada");
} else if (saborDaPizza == "Frango com catupiry") {
  console.log("Pizza Frango com catupiry sendo preparada");
} else {
  console.log("Sabor de pizza inválido");
}

var pizzariaAberta = false;
console.log("PA: " + !pizzariaAberta);
if (!pizzariaAberta) {
  console.log("Estamos abertos");
}

var nota = -7;

/*

nota + 8 ==  Parabens
nota >5 < 8 ==  'foi de raspão'
nota < 5 == 
*/

if (nota >= 8 && nota <= 10) {
  console.log("Parabéns");
} else if (nota >= 5 && nota < 8) {
  console.log("foi de raspão");
} else if (nota < 5 && nota >= 0) {
  console.log("Tente outra vez");
} else {
  console.log("nota inválida");
}
