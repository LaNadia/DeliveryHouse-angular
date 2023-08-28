import {Component, Input} from '@angular/core';
import {ProductInterface} from 'src/app/pages/full-menu/types/product.interface';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
    @Input() products: ProductInterface[] | [] = [];
}
