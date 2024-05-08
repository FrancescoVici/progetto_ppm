import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'card-widget',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './card-widget.component.html',
  styleUrl: './card-widget.component.css',
})
export class CardWidgetComponent {}
