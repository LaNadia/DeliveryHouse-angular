import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AutoSliderComponent} from './auto-slider/auto-slider.component';

@NgModule({
    declarations: [AutoSliderComponent],
    imports: [CommonModule],
    exports: [AutoSliderComponent],
})
export class AutoSliderModule {}
