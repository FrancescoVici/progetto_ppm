import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardWidgetComponent } from '../card-widget/card-widget.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'footer-giornale',
  standalone: true,
  imports: [RouterOutlet, CardWidgetComponent, CommonModule],
  templateUrl: 'footer-giornale.component.html',
  styleUrl: 'footer-giornale.component.css',
})
export class FooterGiornaleComponent {
  times = Array(12).fill(0);
}
