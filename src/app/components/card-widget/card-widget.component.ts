import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'card-widget',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './card-widget.component.html',
  styleUrl: './card-widget.component.css',
})
export class CardWidgetComponent {
  @Input() widgetName: string | null = null;
  @Input() imagePath!: string;
  @Input() title: string | null = null;
  @Input() category: string | null = null;
  @Input() author: string | null = null;
}
