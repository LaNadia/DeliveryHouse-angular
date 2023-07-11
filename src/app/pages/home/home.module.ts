import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SwiperComponent} from 'src/app/components/swiper/swiper.component';
import {AutoSliderModule} from 'src/app/shared/auto-slider/auto-slider.module';
import {ReviewsModule} from 'src/app/shared/reviews/reviews.module';
import {HomeComponent} from './home.component';
import {FooterModule} from '../../components/footer/footer.module';

@NgModule({
    declarations: [HomeComponent, SwiperComponent],
    imports: [CommonModule, AutoSliderModule, ReviewsModule, FooterModule],
    exports: [HomeComponent],
})
export class HomeModule {}
