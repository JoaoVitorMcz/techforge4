class Pagamento {
  processar(): void {
    console.log("Processando pagamento genérico...");
  }
}

class PagamentoCartao extends Pagamento {
  constructor(private numeroCartao: string) {
    super();
  }

  processar(): void {
    if (this.numeroCartao.length === 16) {
      console.log(`Pagamento com cartão ${this.numeroCartao} aprovado!`);
    } else {
      console.log("Número de cartão inválido!");
    }
  }
}

class PagamentoBoleto extends Pagamento {
  processar(): void {
    const codigo = Math.floor(Math.random() * 1000000000000);
    console.log(`Boleto gerado: ${codigo}`);
  }
}

function processarPagamentos(pagamentos: Pagamento[]): void {
  pagamentos.forEach(p => p.processar());
}

// Teste
processarPagamentos([
  new PagamentoCartao("1234567890123456"),
  new PagamentoBoleto()
]);
