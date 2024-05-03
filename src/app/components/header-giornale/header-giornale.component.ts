import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'header-giornale',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: 'header-giornale.component.html',
  styleUrl: 'header-giornale.component.css',
})
export class HeaderGiornaleComponent {}
