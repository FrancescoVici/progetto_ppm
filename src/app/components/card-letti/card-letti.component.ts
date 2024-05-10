import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Articolo } from '../../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'card-letti',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './card-letti.component.html',
  styleUrl: './card-letti.component.css',
})
export class CardLettiComponent {}
