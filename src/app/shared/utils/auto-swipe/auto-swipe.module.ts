import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AutoSwipeDirective} from './auto-swipe.directive';

@NgModule({
    declarations: [AutoSwipeDirective],
    imports: [CommonModule],
    exports: [AutoSwipeDirective],
})
export class AutoSwipeModule {}
