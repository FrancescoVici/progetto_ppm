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
}
