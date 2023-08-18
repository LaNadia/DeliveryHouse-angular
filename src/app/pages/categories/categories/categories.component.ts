import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {DBTypes} from 'src/app/shared/round-carousel/types/db-types.types';
import {DBForRoundSliderBarbeque} from 'src/assets/db/bd-for-round-slider-barbeque';
import {DBForRoundSliderBurgers} from 'src/assets/db/bd-for-round-slider-burgers';
import {DBForRoundSliderPizza} from 'src/assets/db/bd-for-round-slider-pizza';
import {DBForRoundSliderSushi} from 'src/assets/db/bd-for-round-slider-sushi';
import {DBForRoundSliderWok} from 'src/assets/db/bd-for-round-slider-wok';

@Component({
    selector: 'app-gallery',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
    images: DBTypes[] | null = null;
    category = '';

    constructor(private readonly router: Router) {}

    changeCarouselDB(value: string) {
        this.category = value;

        switch (value) {
            case 'pizza':
                this.router.navigate(['/categories', 'pizza']);
                this.images = [...DBForRoundSliderPizza];
                break;
            case 'sushi':
                this.router.navigate(['/categories', 'sushi']);
                this.images = [...DBForRoundSliderSushi];
                break;
            case 'burgers':
                this.router.navigate(['/categories', 'burgers']);
                this.images = [...DBForRoundSliderBurgers];
                break;
            case 'wok':
                this.router.navigate(['/categories', 'wok']);
                this.images = [...DBForRoundSliderWok];
                break;
            case 'barbecue':
                this.router.navigate(['/categories', 'barbecue']);
                this.images = [...DBForRoundSliderBarbeque];
                break;
            default:
                // eslint-disable-next-line no-console
                console.log(`Sorry, we are out of `);
        }
    }
}
