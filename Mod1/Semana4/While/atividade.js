function listaDecrescente(numeroPositivo) {
  var contador = numeroPositivo;
  var ordemDecrescente = "";
  while (contador >= 0) {
    ordemDecrescente = ordemDecrescente + ` ${contador}`;
    contador--;
  }
  return ordemDecrescente;
}

var numeroPositivo = prompt("Digite um numero positivo");

var listaDeNumeros = listaDecrescente(numeroPositivo);

document.write(listaDeNumeros);
