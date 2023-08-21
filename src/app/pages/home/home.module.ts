import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SwiperComponent} from 'src/app/components/swiper/swiper.component';
import {AutoSliderModule} from 'src/app/shared/auto-slider/auto-slider.module';
import {ReviewsModule} from 'src/app/shared/reviews/reviews.module';
import {WhyUsSectionComponent} from 'src/app/components/why-us-section/why-us-section.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './home.component';
import {FooterModule} from '../../components/footer/footer.module';

@NgModule({
    declarations: [HomeComponent, SwiperComponent, WhyUsSectionComponent],
    imports: [CommonModule, AutoSliderModule, ReviewsModule, FooterModule, ReactiveFormsModule],
    exports: [HomeComponent],
})
export class HomeModule {}
