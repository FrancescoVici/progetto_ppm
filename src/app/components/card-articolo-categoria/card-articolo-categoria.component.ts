import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Articolo } from '../../models';

@Component({
  selector: 'card-articolo-categoria',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './card-articolo-categoria.component.html',
  styleUrl: './card-articolo-categoria.component.css',
})
export class CardArticoloCategoriaComponent {
  @Input() public articolo: Articolo | null = null;
}
