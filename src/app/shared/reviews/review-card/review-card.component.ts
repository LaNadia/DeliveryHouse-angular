import {Component, Input} from '@angular/core';
import {IReviewItem} from '../types/reviewItemType.type';

@Component({
    selector: 'app-review-card',
    templateUrl: './review-card.component.html',
    styleUrls: ['./review-card.component.scss'],
})
export class ReviewCardComponent {
    @Input() review: IReviewItem | undefined;
}
