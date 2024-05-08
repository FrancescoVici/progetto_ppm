import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Necrologio } from '../../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'list-necrologio',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  templateUrl: './list-necrologio.component.html',
  styleUrl: './list-necrologio.component.css',
})
export class ListNecrologioComponent {
  public necrologioList: Necrologio[] = [];

  constructor(private http: HttpClient) {
    this.getDataNecrologio();
  }

  getDataNecrologio(): void {
    this.http.get<any>('../assets/data-necrologio-list.json').subscribe((x) => {
      this.necrologioList = x.item;
    });
  }
}
