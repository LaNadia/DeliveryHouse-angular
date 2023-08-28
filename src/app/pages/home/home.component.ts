import {Component} from '@angular/core';
import {DBTypes} from 'src/app/shared/round-carousel/types/db-types.types';
import {DBSwiperImages} from 'src/assets/db/bd-swiper-images';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    images: DBTypes[] = DBSwiperImages;
}
