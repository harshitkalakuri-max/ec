import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
    @Input() diameter: number = 40;
    @Input() overlay: boolean = false;
    @Input() message?: string;
    @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
}
