import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SwiperComponent} from 'src/app/components/swiper/swiper.component';
import {AutoSliderModule} from 'src/app/shared/auto-slider/auto-slider.module';
import {ReviewsModule} from 'src/app/shared/reviews/reviews.module';
import {WhyUsSectionComponent} from 'src/app/components/why-us-section/why-us-section.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CarouselModule} from 'src/app/shared/utils/carousel/carousel.module';
import {AutoSwipeModule} from 'src/app/shared/utils/auto-swipe/auto-swipe.module';
import {HowToJoinUsSectionComponent} from 'src/app/components/how-to-join-us-section/how-to-join.component';
import {HomeComponent} from './home.component';
import {FooterModule} from '../../components/footer/footer.module';

@NgModule({
    declarations: [
        HomeComponent,
        SwiperComponent,
        WhyUsSectionComponent,
        HowToJoinUsSectionComponent,
    ],
    imports: [
        CommonModule,
        AutoSliderModule,
        CarouselModule,
        ReviewsModule,
        FooterModule,
        ReactiveFormsModule,
        AutoSwipeModule,
    ],
    exports: [HomeComponent],
})
export class HomeModule {}
