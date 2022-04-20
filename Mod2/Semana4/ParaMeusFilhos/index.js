$("#criarConta").click((e) => {
  e.preventDefault();
  const nome = $("#nome").val();
  const cpf = $("#cpf").val();
  const tipoDeConta = $("#tipoDeConta").val();
  const cliente = new ContaCorrente(tipoDeConta, nome, cpf);
  console.log(cliente);
});
