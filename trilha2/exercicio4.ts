class Temperatura {
  valor: number; // em Celsius

  constructor(valor: number) {
    this.valor = valor;
  }

  paraFahrenheit(): number {
    return (this.valor * 9) / 5 + 32;
  }

  paraKelvin(): number {
    return this.valor + 273.15;
  }
}

// Teste
const temp = new Temperatura(25);
console.log(`Fahrenheit: ${temp.paraFahrenheit()}°F`);
console.log(`Kelvin: ${temp.paraKelvin()}K`);
