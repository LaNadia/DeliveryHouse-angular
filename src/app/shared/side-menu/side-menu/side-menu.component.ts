import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ISideMenuCategoryInterface} from 'src/app/pages/categories/db/db-categories-side-menu';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
    @Input() categoriesData: ISideMenuCategoryInterface[] | [] = [];

    @Output() changeCategEvent = new EventEmitter<string>();
    changeCategory(cat: string) {
        this.changeCategEvent.emit(cat);
    }

    category = '';

    constructor(private readonly activatedRoute: ActivatedRoute) {}
    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            // eslint-disable-next-line dot-notation
            this.category = params['category'];
            this.changeCategory(this.category);
        });
    }
}
