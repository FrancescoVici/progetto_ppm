import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'mobile-nav-bar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: 'mobile-nav-bar.component.html',
  styleUrl: 'mobile-nav-bar.component.css',
})
export class MobileNavBarComponent {}
