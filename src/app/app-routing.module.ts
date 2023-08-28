import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {
        path: 'categories/:category',
        loadChildren: () =>
            import('./pages/categories/categories.module').then(m => m.CategoriesModule),
    },
    {
        path: 'fullmenu',
        loadChildren: () =>
            import('./pages/full-menu/full-menu.module').then(m => m.FullMenuModule),
    },
    {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
