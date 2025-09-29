class Produto {
  nome: string;
  preco: number;
  quantidade: number;

  constructor(nome: string, preco: number, quantidade: number) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  valorTotalEstoque(): number {
    return this.preco * this.quantidade;
  }
}

// Teste
const produto = new Produto("Notebook", 2500, 3);
console.log(`Valor total em estoque: R$${produto.valorTotalEstoque()}`);
