const mochila = {
  dono: "Inara",
  estado: "novo",
  itens: ["estojo", "caderno", "lancheira"],
  nome: "Rariscreuda",

  guarda(item) {
    this.itens.push(item);
  },
};

//Try === tentar
try {
  mochila.guardar("lapis");
  console.log("Objeto guardado com sucesso");
} catch (erro) {
  console.log("não foi possivel guardar o objeto");
  console.error(erro);
}

console.log("Funciona");
