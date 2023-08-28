import {Component} from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-why-us-section',
    templateUrl: './why-us-section.component.html',
    styleUrls: ['./why-us-section.component.scss'],
})
export class WhyUsSectionComponent {
    form = new FormGroup({
        email: new FormControl('', [Validators.email, Validators.required]),
    });

    onSubmit(event: Event) {
        event.preventDefault();
        // eslint-disable-next-line no-console
        console.log(this.form.value.email);
    }
}
