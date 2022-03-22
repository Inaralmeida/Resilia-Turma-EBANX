function verificaOQueTemNoPote(alimento) {
  if (alimento === "sorvete") {
    return "ótimo, sobremesa";
  } else if (alimento === "feijão") {
    return "Puts, me dei mal";
  } else {
    return "Eu sei o que tem ai, melhor deixar quieto";
  }
}

console.log(verificaOQueTemNoPote(prompt("Qual é o alimento?")));
console.log(verificaOQueTemNoPote(prompt("Qual é o alimento?")));
console.log(verificaOQueTemNoPote(prompt("Qual é o alimento?")));
console.log(verificaOQueTemNoPote(prompt("Qual é o alimento?")));
