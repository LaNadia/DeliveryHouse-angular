import {Component} from '@angular/core';
import {reviewsDB} from '../db/db-reviews';
import {IReviewItem} from '../types/reviewItemType.type';

@Component({
    selector: 'app-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent {
    reviews: IReviewItem[] = reviewsDB;
}
