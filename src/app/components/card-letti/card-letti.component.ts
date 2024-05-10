import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Articolo } from '../../models';
import { CommonModule } from '@angular/common';
import { CardArticoloComponent } from '../card-articolo/card-articolo.component';

@Component({
  selector: 'card-letti',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CardArticoloComponent],
  templateUrl: './card-letti.component.html',
  styleUrl: './card-letti.component.css',
})
export class CardLettiComponent {
  @Input() public articolo: Articolo | null = null;
}
