function criaListaDeItens() {
  var qtdItens = prompt("Qtd de itens");
  var lista = [];
  addItem(qtdItens, lista);
  mostraNaTela(lista);
}

function addItem(qtdItens, lista) {
  var contador = 1;
  while (contador <= qtdItens) {
    var item = prompt("Digite o item");
    if (item.length % 2 != 0) {
      lista.push(item);
      console.log(lista);
      contador++;
    } else {
      alert("Elemento inválido");
    }
  }
}

function mostraNaTela(lista) {
  var indice = 0;
  while (indice < lista.length) {
    document.write(`<li>${lista[indice]}</li>`);
    indice++;
  }
}

criaListaDeItens();
