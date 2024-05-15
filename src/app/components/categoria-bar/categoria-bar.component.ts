import {
  Component,
  AfterViewInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CarouselComponent } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'categoria-bar',
  templateUrl: './categoria-bar.component.html',
  styleUrls: ['./categoria-bar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CategoriaBarComponent implements AfterViewInit {
  @ViewChild(CarouselComponent) owlCarousel: CarouselComponent | undefined;
  public categorie: string[] = [
    'calcio',
    'cronaca',
    'locale',
    'gossip',
    'meteo',
  ];

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoWidth: true,
    autoHeight: false,
    margin: 0,
    navSpeed: 700,
    navText: [
      '<i class="fa-solid fa-chevron-left">',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    nav: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  };

  ngAfterViewInit() {
    document.getElementById('next-slide')?.addEventListener('click', () => {
      this.owlCarousel?.next();
    });

    document.getElementById('prev-slide')?.addEventListener('click', () => {
      this.owlCarousel?.prev();
    });
  }
}
