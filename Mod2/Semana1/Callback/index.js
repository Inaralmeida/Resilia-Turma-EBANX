var btnSubmit = document.querySelector("#submit");
var lista = document.querySelector("#lista-de-frutas");

btnSubmit.addEventListener("click", function (event) {
  event.preventDefault();

  var nomeFruta = document.querySelector("#nome-fruta").value;
  var li = document.createElement("li");

  li.innerText = nomeFruta;
  lista.append(li);
});
