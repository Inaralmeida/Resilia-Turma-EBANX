// Procedimentos: Funções que não possuem retorno

function olaNome(nome) {
  console.log("olá " + nome);
}

function salve(nome) {
  console.log("Salve " + nome);
}

//Ausencia de parâmetros: Funções que não recebem parâmetros

function acenderLampada() {
  return "Lâmpada acesa";
}
function apagarLampada() {
  return "Lâmpada desligada";
}

//Alert: função nativa do navegadot utilizada para exibir uma janela para a pessoa usuária

var texto = "Resilia Web Dev";
alert(texto);
alert("Turma: Códigos do Amanhã");

var nome = prompt("Qual é o teu nome?");
alert("Salve " + nome);
