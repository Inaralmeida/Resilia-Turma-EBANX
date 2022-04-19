class NotasController {
  constructor() {
    this.ListaDeNotas = [];
  }

  criaLista() {
    const model = new Anotacoes();
    const titulo = $("#titulo").val();
    const descricaoTarefa = $("#descricaoTarefa").val();
    model.criaNota(titulo, descricaoTarefa);
    this.ListaDeNotas.push(model);
  }
}
const controller = new NotasController();

$("#submit").click((event) => {
  event.preventDefault();
  controller.criaLista();
  console.log(controller.ListaDeNotas);
});
