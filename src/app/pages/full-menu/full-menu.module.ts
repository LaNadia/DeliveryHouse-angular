import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProductsListModule} from 'src/app/shared/products-list/products-list.module';
import {HttpClientModule} from '@angular/common/http';
import {SideMenuModule} from 'src/app/shared/side-menu/side-menu.module';
import {FullMenuComponent} from './full-menu/full-menu.component';
import {FullMenuService} from './services/full-menu-service.service';

const routes: Routes = [{path: '', component: FullMenuComponent}];
@NgModule({
    declarations: [FullMenuComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        RouterModule.forChild(routes),
        ProductsListModule,
        SideMenuModule,
    ],
    providers: [FullMenuService],
})
export class FullMenuModule {}
