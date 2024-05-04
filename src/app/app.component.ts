import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardArticoloComponent } from './components/card-articolo/card-articolo.component';
import { Articolo } from './models';
import { StickyBarComponent } from './components/sticky-bar/sticky-bar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CardArticoloCategoriaComponent } from './components/card-articolo-categoria/card-articolo-categoria.component';
import { HeaderGiornaleComponent } from './components/header-giornale/header-giornale.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CardArticoloComponent,
    CardArticoloCategoriaComponent,
    StickyBarComponent,
    HeaderGiornaleComponent,
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'progetto-vici-francesco';

  public listaArticoli: Articolo[] = [];
  public listaCategorie: Articolo[] = [];
  // public gianni: string = '';

  constructor(private http: HttpClient) {
    this.getDataArticoli();
    this.getDataCategorie();
    //   const x = new Date();
    //   this.gianni =
    //     x.getFullYear() + '/' + (x.getMonth() + 1) + '/' + x.getDate();
  }

  getDataArticoli(): void {
    this.http.get<any>('../assets/data.json').subscribe((x) => {
      this.listaArticoli = x.data;
    });
  }

  getDataCategorie(): void {
    this.http.get<any>('../assets/data-categorie.json').subscribe((x) => {
      this.listaCategorie = x.data;
    });
  }
}
