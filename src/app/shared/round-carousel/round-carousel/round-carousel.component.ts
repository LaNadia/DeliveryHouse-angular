/* eslint-disable @typescript-eslint/naming-convention */
import {AfterViewInit, Component, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import * as $ from 'jquery';
import {DBTypes} from '../types/db-types.types';
import 'round-slider';

@Component({
    selector: 'app-round-carousel',
    templateUrl: './round-carousel.component.html',
    styleUrls: ['./round-carousel.component.scss'],
    animations: [
        trigger('div', [
            state('void', style({transform: 'rotate(0)'})),
            state('*', style({transform: 'rotate(-60deg)'})),
            transition('void => *', animate('400ms ease-out')),
            transition('* => void', animate('400ms ease-in')),
        ]),
    ],
})
export class RoundCarouselComponent implements AfterViewInit {
    @Input() images: DBTypes[] | null = null;

    ngAfterViewInit() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (<any>$('#slider')).roundSlider({
            svgMode: true,
            circleShape: 'half-top',
            sliderType: 'min-range',
            showTooltip: false,
            // update: this.onValChange.bind(this),
            // value: this.sliderValue,
            startAngle: '0',
            endAngle: '180',
            radius: '450',
            width: '10',
            handleSize: '+10',
            min: '0',
            max: '5',
            step: '1',
            borderWidth: '1',
        });
    }
}
