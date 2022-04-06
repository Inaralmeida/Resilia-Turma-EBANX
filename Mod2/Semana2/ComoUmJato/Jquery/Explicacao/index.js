var h1 = $("h1");
console.log(h1.text());

h1.css("background", "#ffb200");
h1.css("font-size", "50px");

$("#btn").click(function (event) {
  event.preventDefault();
  var nome = $("#nome").val();
  $("#mostra-nome").text(nome);
});

$.ajax({
  url: "https://pokeapi.co/api/v2/pokemon/dratini/",
  success: function (resposta) {
    $("#mostra-nome").text(resposta.name);
  },
});
