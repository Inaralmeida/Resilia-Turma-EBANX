var prateleira = [
  "morte no nilo",
  "um corpo na biblioteca",
  "ass no expresso do oriente",
  "E não sobrou nenhum",
  "Diario de um banana",
  "HP - Pedra filosofal",
];
// console.log(prateleira[0]);
// console.log(prateleira[1]);
// console.log(prateleira[2]);
// console.log(prateleira[3]);
//POSIÇÃO === INDEX || INDICE

//LENGTH === TAMANHO (ALTURA OU COMPRIMENTO)   index++
for (var index = 0; index < prateleira.length; index = index + 1) {
  document.write(`<li>${prateleira[index]}</li>`);
}
