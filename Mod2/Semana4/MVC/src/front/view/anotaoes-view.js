class AnotacoesView {
  mostraNotaNaTela(nota) {
    const notes = $("#notes");
    const div = $("<div>");
    const h6 = $("<h6>").text(nota.titulo);
    const p = $("<p>").text(nota.notas);
    notes.append(div);
    div.append(h6);
    div.append(p);
  }

  mostraErro(erro) {
    const notes = $("#notes");
    const li = $("<li>").text(erro).css("color", "red");
    notes.append(li);
  }
}
