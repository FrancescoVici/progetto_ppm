export class Articolo {
  public immagine: string;
  public titolo: string;
  public autore: string;
  public categoria: string;

  // Costruttore che accetta parametri per inizializzare i campi della classe
  constructor(
    immagine: string,
    titolo: string,
    autore: string,
    categoria: string
  ) {
    this.immagine = immagine;
    this.titolo = titolo;
    this.autore = autore;
    this.categoria = categoria;
  }
}
