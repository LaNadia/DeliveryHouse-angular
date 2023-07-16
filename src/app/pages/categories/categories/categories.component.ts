import {Component} from '@angular/core';
import {DBForRoundSlider} from 'src/assets/db/bd-for-round-slider';

@Component({
    selector: 'app-gallery',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
    images = DBForRoundSlider;
}
