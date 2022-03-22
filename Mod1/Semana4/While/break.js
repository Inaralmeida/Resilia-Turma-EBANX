var nMastigadas = 0;
var tipoComida = "sopa";
while (nMastigadas < 20) {
  if (tipoComida === "sopa") {
    console.log("É só engolir!");
    break;
  }
  console.log(`Mastigada de número ${nMastigadas} realizada`);
  nMastigadas++;
}

var email = prompt("digite seu email");
var nTentativas = 3;

while (nTentativas >= 1) {
  if (email.indexOf("@") >= 0) {
    alert("Email correto");
    break;
  }
  alert(`Email invalido. Você ainda tem ${nTentativas} tentativas`);
  email = prompt("digite seu email");
  nTentativas--;
}

document.write("Saiu do while");
