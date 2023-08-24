import {trigger, transition, query, style, animate} from '@angular/animations';
import {Component, Input} from '@angular/core';
import {DBTypes} from 'src/app/shared/round-carousel/types/db-types.types';

type Direction = 'prev' | 'next' | 'none';

@Component({
    selector: 'app-swiper',
    templateUrl: './swiper.component.html',
    styleUrls: ['./swiper.component.scss'],
    animations: [
        trigger('enter', [
            transition('* => next', [
                query('.image', [
                    style({transform: 'translateX(-50px)'}), // apply default styles before animation starts
                    animate('1000ms ease', style({transform: 'translateX(0px)'})),
                ]),
            ]),
            transition('* => prev', [
                query('.image', [
                    style({transform: 'translateX(50px)'}), // apply default styles before animation starts
                    animate('1000ms ease', style({transform: 'translateX(0px)'})),
                ]),
            ]),
        ]),
    ],
})
export class SwiperComponent {
    @Input() images: DBTypes[] | [] = [];

    constructor() {
        this.direction = 'none';
    }

    direction: Direction;
    bg = false;

    leftFunc() {
        this.direction = 'prev';
        this.bg = !this.bg;
    }

    rightFunc() {
        this.direction = 'next';
        this.bg = !this.bg;
    }
}
