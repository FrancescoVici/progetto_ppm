import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Articolo } from '../../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'card-articolo',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './card-articolo.component.html',
  styleUrl: './card-articolo.component.css',
})
export class CardArticoloComponent {
  @Input() public articolo: Articolo | null = null;
  @Input() public small: boolean = false;

  public getTitoloSmall(): string {
    return this.small
      ? 'title font-small spacing-titolo-small'
      : 'title font-large spacing-titolo-large';
  }

  public getCategoriaSmall(): string {
    return this.small
      ? 'categoria glyph spacing-categoria-small'
      : 'categoria glyph spacing-categoria-large';
  }
}
