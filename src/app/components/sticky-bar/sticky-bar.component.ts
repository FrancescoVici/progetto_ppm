import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'sticky-bar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: 'sticky-bar.component.html',
  styleUrl: 'sticky-bar.component.css',
})
export class StickyBarComponent {}
