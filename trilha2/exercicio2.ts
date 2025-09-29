class Livro {
  titulo: string;
  autor: string;
  paginas: number;
  lido: boolean;

  constructor(titulo: string, autor: string, paginas: number) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.lido = false;
  }

  marcarComoLido(): void {
    this.lido = true;
    console.log(`O livro "${this.titulo}" foi marcado como lido.`);
  }
}

// Teste
const livro = new Livro("1984", "George Orwell", 328);
livro.marcarComoLido();
