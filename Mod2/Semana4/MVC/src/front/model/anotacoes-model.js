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
        document.write("Nota criada com sucesso");
      } else {
        throw new Error("Criação de notas - dados inválidos");
      }
    } catch (error) {
      document.write(error);
    }
  }
}

const nota1 = new Anotacoes();

nota1.criaNota("Estudar", "Estudar Class com urgencia!!!");
