class Agenda {
  compromissos: string[];

  constructor() {
    this.compromissos = [];
  }

  adicionarCompromisso(compromisso: string): void {
    this.compromissos.push(compromisso);
    console.log(`Compromisso "${compromisso}" adicionado com sucesso!`);
  }

  listarCompromissos(): void {
    console.log("Compromissos:");
    this.compromissos.forEach((c, i) => {
      console.log(`${i + 1}. ${c}`);
    });
  }
}

// Teste
const agenda = new Agenda();
agenda.adicionarCompromisso("Reunião com o cliente");
agenda.adicionarCompromisso("Estudar TypeScript");
agenda.listarCompromissos();
