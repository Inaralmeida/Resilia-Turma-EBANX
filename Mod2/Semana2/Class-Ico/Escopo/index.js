const carro = {
  qtdRodas: 4,
  qtsPortas: 2,
  modelo: "Corsa",
  buzinar: function () {
    console.log("bi-bi");
  },
  getQtdRodas: function () {
    return this.qtdRodas;
  },
};

class Carro {
  constructor(placa) {
    this.placa = placa;
    this.qtdRodas = 4;
    this.qtdPortas = 4;
    this.cor = "preto";
  }
  buzinar() {
    console.log("bi-bi");
  }
}

function fabrica() {
  const containers = [];

  for (let placa = 0; placa < 6; placa++) {
    const carro = new Carro(placa);
    containers.push(carro);
  }

  console.log(containers);
}

fabrica();
