import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-activity-indicator',
    templateUrl: './activity-indicator.component.html',
    styleUrls: ['../css-file/bootstrap4.css', './activity-indicator.component.css'],
})
export class ActivityIndicatorComponent {
    @Input() message: string = 'Loading... Please wait.';
}