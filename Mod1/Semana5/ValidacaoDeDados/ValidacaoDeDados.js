function validaNomeSobrenome() {
  var nomeSobrenome = prompt("Digite seu nome e sobrenome");

  while (true) {
    if (nomeSobrenome.indexOf(" ") > 2) {
      document.write(`Nome: ${nomeSobrenome}`);
      break;
    } else {
      alert(`Informação invalida`);
      nomeSobrenome = prompt("Digite seu nome e sobrenome");
    }
  }
}

validaNomeSobrenome();
