import {Component, OnInit} from '@angular/core';
import {FullMenuService} from '../services/full-menu-service.service';
import {CategoryInterface} from '../types/category.interface';
import {ProductInterface} from '../types/product.interface';

@Component({
    selector: 'app-full-menu',
    templateUrl: './full-menu.component.html',
    styleUrls: ['./full-menu.component.scss'],
})
export class FullMenuComponent implements OnInit {
    products: ProductInterface[] | [] = [];

    constructor(private readonly fullMenuService: FullMenuService) {}

    ngOnInit(): void {
        // eslint-disable-next-line rxjs/no-ignored-observable
        this.fullMenuService.getMenuByCategory().subscribe((data: CategoryInterface) => {
            this.products = data.meals;
        });
    }
}
