import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SwiperComponent} from 'src/app/components/swiper/swiper.component';
import {HomeComponent} from './home.component';

@NgModule({
    declarations: [HomeComponent, SwiperComponent],
    imports: [CommonModule],
    exports: [HomeComponent],
})
export class HomeModule {}
