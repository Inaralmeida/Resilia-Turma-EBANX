var h1 = document.querySelector("h1");

h1.addEventListener("click", function () {
  h1.innerText = "Evento: Click unico";
});

h1.addEventListener("dblclick", function () {
  h1.innerText = "Evento: duplo click";
});
