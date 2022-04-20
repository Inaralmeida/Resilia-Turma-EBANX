class NotasController {
  constructor() {
    this.ListaDeNotas = [];
  }

  criaLista() {
    const model = new Anotacoes();
    const view = new AnotacoesView();
    const titulo = $("#titulo").val();
    const descricaoTarefa = $("#descricaoTarefa").val();

    try {
      model.criaNota(titulo, descricaoTarefa);
      this.ListaDeNotas.push(model);
      view.mostraNotaNaTela(model);
    } catch (error) {
      view.mostraErro(error);
    }
  }
}
const controller = new NotasController();

$("#submit").click((event) => {
  event.preventDefault();
  controller.criaLista();
  console.log(controller.ListaDeNotas);
});
