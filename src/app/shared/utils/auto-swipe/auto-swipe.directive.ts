import {Directive, ElementRef, OnDestroy, OnInit} from '@angular/core';

@Directive({
    selector: '[appAutoSwipe]',
})
export class AutoSwipeDirective implements OnInit, OnDestroy {
    constructor(private readonly element: ElementRef) {}
    interval!: any;
    ngOnInit() {
        this.interval = setInterval(() => {
            this.autoClick();
        }, 6000);
    }

    private autoClick() {
        this.element.nativeElement.click();
    }

    ngOnDestroy(): void {
        clearInterval(this.interval);
    }
}
