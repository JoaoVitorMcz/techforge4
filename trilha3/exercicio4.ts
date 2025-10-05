class Animal {
  private energia: number = 50;

  comer(valor: number): void {
    this.energia += valor;
  }

  protected gastarEnergia(valor: number): void {
    this.energia -= valor;
  }

  statusEnergia(): void {
    console.log(`Energia atual: ${this.energia}`);
  }
}

class Leao extends Animal {
  comer(): void {
    this.gastarEnergia(20);
    super.comer(30);
  }
}

class Passaro extends Animal {
  comer(): void {
    super.comer(10);
  }
}

// Teste
const leao = new Leao();
const passaro = new Passaro();

leao.comer();
leao.statusEnergia();

passaro.comer();
passaro.statusEnergia();
