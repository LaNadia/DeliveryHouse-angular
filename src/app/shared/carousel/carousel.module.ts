import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselDirective} from './carousel.directive';

@NgModule({
    declarations: [CarouselDirective],
    imports: [CommonModule, BrowserAnimationsModule],
    exports: [CarouselDirective],
})
export class CarouselModule {}
