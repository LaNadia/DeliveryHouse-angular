import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RoundCarouselModule} from 'src/app/shared/round-carousel/round-carousel.module';
import {CategoriesComponent} from './categories/categories.component';

@NgModule({
    declarations: [CategoriesComponent],
    imports: [CommonModule, RoundCarouselModule],
    exports: [CategoriesComponent],
})
export class CategoriesModule {}
