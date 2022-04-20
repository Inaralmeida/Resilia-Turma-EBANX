class Conta {
  constructor(nomeCliente, cpf, tipoDeConta) {
    this._nomeCliente = nomeCliente;
    this._cpf = cpf;
    this.tipoDeConta = tipoDeConta;
    this._numeroDaConta = this._criaNumeroDaConta();
    this._saldo = 0;
  }

  getSaldo() {
    return this._saldo;
  }

  setSaldo(novoSaldo) {
    this._saldo = novoSaldo;
  }

  _criaNumeroDaConta() {
    let numeroDaConta = "";
    for (let i = 0; i < 6; i++) {
      numeroDaConta += Math.ceil(Math.random() * 10);
    }
    return Number(numeroDaConta);
  }

  depositar(valor) {
    if (typeof valor === "number" && valor > 0) {
      const novoSaldo = this.getSaldo() + valor;
      this.setSaldo(novoSaldo);
      return `Saldo atualizado ${this.getSaldo()}`;
    } else {
      throw new Error(`Valor invalido,tente novamente mais tarde`);
    }
  }

  sacar(valor) {
    if (typeof valor === "number" && valor < this.getSaldo()) {
      const novoSaldo = this.getSaldo() - valor;
      this.setSaldo(novoSaldo);
      return `Saldo atualizado ${this.getSaldo()}`;
    } else {
      throw new Error(`Saldo insuficiente`);
    }
  }
}

class ContaCorrente extends Conta {
  constructor(nomeCliente, cpf, tipoDeConta) {
    super(nomeCliente, cpf, tipoDeConta);
  }

  verExtrato() {
    return `Saldo atual: ${this.getSaldo()}`;
  }
}

class ContaPoupanca extends Conta {
  constructor(nomeCliente, cpf, tipoDeConta) {
    super(nomeCliente, cpf, tipoDeConta);
  }
}
