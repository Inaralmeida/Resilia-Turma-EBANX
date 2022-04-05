function addProdutos() {
  var listaProdutos = [
    "celular",
    "notebook",
    "teclado gamer",
    "monitor 29",
    "caneca",
  ];

  var sectionProdutos = document.querySelector("#produtos");
  for (var i = 0; i < listaProdutos.length; i++) {
    var p = document.createElement("p");
    p.innerText = listaProdutos[i];
    sectionProdutos.append(p);
  }
}

addProdutos();
