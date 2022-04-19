class Anotacoes {
  constructor() {
    this.titulo = "";
    this.notas = "";
  }

  setTitulo(titulo) {
    this.titulo = titulo;
  }

  setNotas(notas) {
    this.notas = notas;
  }

  criaNota(titulo, notas) {
    try {
      if (typeof titulo === "string" && typeof notas === "string") {
        this.setTitulo(titulo);
        this.setNotas(notas);
      } else {
        throw new Error("Criação de notas - dados inválidos");
      }
    } catch (error) {
      console.error(error);
    }
  }
}
