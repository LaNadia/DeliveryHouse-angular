/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/naming-convention */
import {Component, Input} from '@angular/core';
import {animate, query, sequence, state, style, transition, trigger} from '@angular/animations';
import {rotateInOnEnterAnimation} from 'angular-animations';
import {DBTypes} from '../types/db-types.types';

type Direction = 'prev' | 'next' | 'next2' | 'none';

@Component({
    selector: 'app-round-carousel',
    templateUrl: './round-carousel.component.html',
    styleUrls: ['./round-carousel.component.scss'],
    animations: [
        rotateInOnEnterAnimation({anchor: 'firstEnter', duration: 900, delay: 100}),
        trigger('enter', [
            transition('* => next', [
                query('.image', [
                    style({opacity: 0.85, transform: 'rotate(-60deg)'}), // apply default styles before animation starts
                    sequence([
                        animate(
                            '500ms ease-in-out',
                            style({opacity: 1, transform: 'rotate(15deg)'}),
                        ),
                        animate(
                            '300ms ease-in-out',
                            style({opacity: 1, transform: 'rotate(0deg)'}),
                        ),
                    ]),
                ]),
            ]),
            transition('* => prev', [
                query('.image', [
                    style({opacity: 0.85, transform: 'rotate(60deg)'}), // apply default styles before animation starts
                    sequence([
                        animate(
                            '500ms ease-in-out',
                            style({opacity: 1, transform: 'rotate(-15deg)'}),
                        ),
                        animate(
                            '300ms ease-in-out',
                            style({opacity: 1, transform: 'rotate(0deg)'}),
                        ),
                    ]),
                ]),
            ]),
        ]),
    ],
})
export class RoundCarouselComponent {
    @Input() images: DBTypes[] | null = null;

    direction: Direction;

    bg = false;

    constructor() {
        this.direction = 'none';
    }

    leftFunc() {
        this.direction = 'prev';
        this.bg = !this.bg;
    }

    rightFunc() {
        this.direction = 'next';
        this.bg = !this.bg;
    }
}
