for (let i = 0; i < 3; i++) {
  const nome = "inara";
  console.log(nome);
}
for (let i = 0; i < 3; i++) {
  const nome = "Thom";
  console.log(nome);
}

const nome = "Gustavo";
nome = "magali";
console.log(saudacao(nome));
despedida(nome);

function saudacao(nome) {
  const ola = `Olá ${nome}`;
  return ola;
}

function despedida(nome) {
  const tchau = `Tchau ${nome}`;
}
