import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {HomeModule} from './pages/home/home.module';
import {CategoriesModule} from './pages/categories/categories.module';

@NgModule({
    declarations: [AppComponent, HeaderComponent],
    imports: [BrowserModule, AppRoutingModule, HomeModule, CategoriesModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
