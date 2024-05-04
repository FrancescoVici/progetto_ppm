import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'header-giornale',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: 'header-giornale.component.html',
  styleUrl: 'header-giornale.component.css',
})
export class HeaderGiornaleComponent {
  public data: string = '';

  constructor() {
    this.setDate(new Date());
  }

  private setDate(x: Date) {
    this.data =
      this.getGiornoSettimana(x.getDay()) +
      x.getDate() +
      this.getNomeMese(x.getMonth() + 1) +
      x.getFullYear();
  }

  private getGiornoSettimana(day: number): string {
    switch (day) {
      case 0:
        return 'domenica, ';
      case 1:
        return 'lunedì, ';
      case 2:
        return 'martedì, ';
      case 3:
        return 'mercoledì, ';
      case 4:
        return 'giovedì, ';
      case 5:
        return 'venerdì, ';
      case 6:
        return 'sabato, ';
    }
    return '';
  }

  private getNomeMese(month: number): string {
    switch (month) {
      case 1:
        return ' gennaio ';
      case 2:
        return ' febbraio ';
      case 3:
        return ' marzo ';
      case 4:
        return ' aprile ';
      case 5:
        return ' maggio ';
      case 6:
        return ' giugno ';
      case 7:
        return ' luglio ';
      case 8:
        return ' agosto ';
      case 9:
        return ' settembre ';
      case 10:
        return ' ottobre ';
      case 11:
        return ' novembre ';
      case 12:
        return ' dicembre ';
      default:
        return '';
    }
  }
}
