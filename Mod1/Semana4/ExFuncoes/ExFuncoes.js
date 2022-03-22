function previsaoRodagem(qdtGasolina, kmPorLitro) {
  return qdtGasolina * kmPorLitro;
}

var qtdGasolina = prompt("Quanto de gasolina tem no tanque?");
var kmPorLitro = prompt("Quantos km teu carro faz com 1 litro");
console.log(previsaoRodagem(qtdGasolina, kmPorLitro));
30;
