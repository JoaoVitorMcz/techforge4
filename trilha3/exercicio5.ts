abstract class Funcionario {
  constructor(protected nome: string, protected salario: number) {}

  abstract calcularBonus(): number;

  // getters públicos para acessar de fora (sem abrir as propriedades)
  public getNome(): string {
    return this.nome;
  }

  public getSalario(): number {
    return this.salario;
  }

  // método público útil que já aplica o bônus (usa o calcularBonus implementado nas subclasses)
  public calcularSalarioFinal(): number {
    return this.salario + this.calcularBonus();
  }
}

class Gerente extends Funcionario {
  calcularBonus(): number {
    // poderia usar this.salario (protected), mas usar getSalario() também funciona
    return this.getSalario() * 0.10;
  }
}

class Operario extends Funcionario {
  calcularBonus(): number {
    return this.getSalario() * 0.05;
  }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
  funcionarios.forEach(f => {
    const salarioFinal = f.calcularSalarioFinal();
    console.log(`${f.getNome()}: R$ ${salarioFinal.toFixed(2)}`);
  });
}

// Teste
calcularSalarioComBonus([
  new Gerente("Carlos", 5000),
  new Operario("João", 2000)
]);
