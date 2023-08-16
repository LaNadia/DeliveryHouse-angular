import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RoundCarouselComponent} from './round-carousel/round-carousel.component';
import {CarouselModule} from '../carousel/carousel.module';

@NgModule({
    declarations: [RoundCarouselComponent],
    imports: [CommonModule, CarouselModule],
    exports: [RoundCarouselComponent],
})
export class RoundCarouselModule {}
