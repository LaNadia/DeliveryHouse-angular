import {NgModule} from '@angular/core';
import {RoundCarouselModule} from 'src/app/shared/round-carousel/round-carousel.module';
import {SideMenuModule} from 'src/app/shared/side-menu/side-menu.module';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {CategoriesComponent} from './categories/categories.component';

const routes: Routes = [{path: '', component: CategoriesComponent}];

@NgModule({
    declarations: [CategoriesComponent],
    imports: [
        CommonModule,
        RoundCarouselModule,
        SideMenuModule,
        RouterModule,
        RouterModule.forChild(routes),
    ],
    exports: [CategoriesComponent],
})
export class CategoriesModule {}
