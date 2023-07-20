/* eslint-disable @typescript-eslint/naming-convention */
import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MotionPathPlugin} from 'gsap/MotionPathPlugin';
import gsap from 'gsap';
import {DBTypes} from '../types/db-types.types';

@Component({
    selector: 'app-round-carousel',
    templateUrl: './round-carousel.component.html',
    styleUrls: ['./round-carousel.component.scss'],
    animations: [
        trigger('div', [
            state('void', style({transform: 'rotate(0)'})),
            state('*', style({transform: 'rotate(-60deg)'})),
            transition('void => *', animate('400ms ease-out')),
            transition('* => void', animate('400ms ease-in')),
        ]),
    ],
})
export class RoundCarouselComponent implements AfterViewInit {
    @Input() images: DBTypes[] | null = null;
    @ViewChild('holder') holder!: any;
    @ViewChild('svg') svg!: any;
    @ViewChild('next') next!: any;
    @ViewChild('prev') prev!: any;
    @ViewChild('wrapper') wrapper!: any;
    @ViewChild('container') container!: any;

    constructor() {
        gsap.registerPlugin(MotionPathPlugin);
        //  gsap.registerPlugin(CSSPlugin);
    }

    ngAfterViewInit() {
        this.createSlider();
    }

    createSlider() {
        this.holder = this.holder.nativeElement;
        this.svg = this.svg.nativeElement;
        this.next = this.next.nativeElement;
        this.prev = this.prev.nativeElement;
        this.wrapper = this.wrapper.nativeElement;
        const circlePath = MotionPathPlugin.convertToPath(this.holder, false)[0];

        circlePath.id = 'circlePath';
        this.svg.prepend(circlePath);

        const items: any[] = gsap.utils.toArray('.item');
        const numItems = items.length;
        const itemStep = 1 / numItems;
        const wrapProgress = gsap.utils.wrap(0, 1);
        const snap = gsap.utils.snap(itemStep);
        const wrapTracker = gsap.utils.wrap(0, numItems);
        const tracker = {item: 0};

        gsap.set(items, {
            motionPath: {
                path: circlePath,
                align: circlePath,
                alignOrigin: [0.5, 0.5],
                end: (i: number) => i / items.length,
            },
            scale: 0.9,
        } as any);

        const tl = gsap.timeline({paused: true, reversed: true});

        tl.to(this.wrapper, {
            rotation: 360,
            transformOrigin: 'center',
            duration: 1,
            ease: 'none',
        });

        tl.to(
            items,
            {
                rotation: '-=360',
                transformOrigin: 'center center',
                duration: 1,
                ease: 'none',
            },
            0,
        );

        tl.to(
            tracker,
            {
                item: numItems,
                duration: 1,
                ease: 'none',
                modifiers: {
                    item: value => wrapTracker(numItems - Math.round(value)),
                },
            },
            0,
        );

        items.forEach((el: any, i) => {
            el.addEventListener('click', () => {
                const current = tracker.item;
                const activeItem = i;

                if (i === current) {
                    return;
                }

                // set active item to the item that was clicked and remove active class from all items
                // this.itemActive.classList.remove('active');
                // items[activeItem].classList.add('active');

                document.querySelector('.item.active')?.classList.remove('active');

                items[activeItem].classList.add('active');

                const diff = current - i;

                if (Math.abs(diff) < numItems / 2) {
                    moveWheel(diff * itemStep);
                } else {
                    const amt = numItems - Math.abs(diff);

                    if (current > i) {
                        moveWheel(amt * -itemStep);
                    } else {
                        moveWheel(amt * itemStep);
                    }
                }
            });
        });

        this.next.addEventListener('click', function () {
            // const i = 0;

            // const theArray = items;
            // const currentIndex = 0;

            // if (i === 0) {
            //     console.log(theArray[currentIndex]);
            // } else if (i < 0) {
            //     console.log(theArray[(currentIndex + theArray.length + i) % theArray.length]);
            // } else if (i > 0) {
            //     console.log(theArray[(currentIndex + i) % theArray.length]);
            // }

            return moveWheel(-itemStep);
        });

        this.prev.addEventListener('click', function () {
            return moveWheel(itemStep);
        });

        function moveWheel(amount: number) {
            const progress = tl.progress();

            tl.progress(wrapProgress(snap(tl.progress() + amount)));
            const next = tracker.item;

            tl.progress(progress);
            // console.log(this.elementRef.nativeElement);
            document.querySelector('.item.active')?.classList.remove('active');
            items[next].classList.add('active');

            gsap.to(tl, {
                progress: snap(tl.progress() + amount),
                modifiers: {
                    progress: wrapProgress,
                },
            });
        }
    }
}
