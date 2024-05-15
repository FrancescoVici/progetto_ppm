import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Articolo } from '../../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'card-articolo-categoria',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './card-articolo-categoria.component.html',
  styleUrl: './card-articolo-categoria.component.css',
})
export class CardArticoloCategoriaComponent {
  @Input() public articolo: Articolo | null = null;
  @Input() public large: boolean = false;

  public getTitleSize(): string {
    return this.large
      ? 'title spacing-titolo font-large'
      : 'title spacing-titolo font-small';
  }
}
