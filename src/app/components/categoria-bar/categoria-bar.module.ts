import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaBarComponent } from './categoria-bar.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  imports: [CommonModule, RouterOutlet, RouterModule, CarouselModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [CategoriaBarComponent],
  exports: [CategoriaBarComponent],
})
export class CategoriaBarModule {}
