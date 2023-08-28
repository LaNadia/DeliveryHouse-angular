import {Component, Input} from '@angular/core';
import {ProductInterface} from 'src/app/pages/full-menu/types/product.interface';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
    @Input() card: ProductInterface | null = null;

    rating = [1, 2, 3, 4, 5];
}
