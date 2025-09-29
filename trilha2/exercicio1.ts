class ContaBancaria {
  titular: string;
  saldo: number;

  constructor(titular: string, saldoInicial: number = 0) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor;
      console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    } else {
      console.log("Valor de depósito inválido!");
    }
  }

  sacar(valor: number): void {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    } else {
      console.log("Saldo insuficiente ou valor inválido!");
    }
  }
}

const conta = new ContaBancaria("João", 100);
conta.depositar(50);
conta.sacar(30);
