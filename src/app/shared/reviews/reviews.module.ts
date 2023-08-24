import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReviewsComponent} from './reviews/reviews.component';
import {ReviewCardComponent} from './review-card/review-card.component';
import {ToArrayPipe} from '../utils/to-array/to-array.pipe';

@NgModule({
    declarations: [ReviewsComponent, ReviewCardComponent, ToArrayPipe],
    imports: [CommonModule],
    exports: [ReviewsComponent],
})
export class ReviewsModule {}
