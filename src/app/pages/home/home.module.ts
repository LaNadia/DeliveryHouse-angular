import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SwiperComponent} from 'src/app/components/swiper/swiper.component';
import {AutoSliderModule} from 'src/app/shared/auto-slider/auto-slider.module';
import {ReviewsModule} from 'src/app/shared/reviews/reviews.module';
import {HomeComponent} from './home.component';

@NgModule({
    declarations: [HomeComponent, SwiperComponent],
    imports: [CommonModule, AutoSliderModule, ReviewsModule],
    exports: [HomeComponent],
})
export class HomeModule {}
