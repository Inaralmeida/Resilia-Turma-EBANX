var h1 = document.querySelector("h1");

var abrir = function () {
  h1.innerText = "Estamos abertos";
  h1.innerText = "Abertos";
};
function fechar() {
  h1.innerText = "Estamos fechados";
}

h1.addEventListener("click", function () {
  h1.innerText = "Estamos abertos";
  h1.style.backgroundColor = "blue";
  h1.style.color = "white";
});

h1.addEventListener("dblclick", function () {
  h1.innerText = "Estamos fechados";
  h1.style.backgroundColor = "black";
  h1.style.color = "red";
});

var body = document.body;
body.innerHTML = `<h1> oi </h1>`;
