const botoes = document.querySelectorAll(".btn-click");

botoes.forEach((botao) => {
  botao.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("oi");
  });
});

const nomes = [
  "Hellen",
  "Thaynara",
  "Jéssica",
  "Gustavo",
  "Mayckel",
  "Victor 20",
];

for (let nome of nomes) {
  console.log(`${nome} é incrivel`);
}
