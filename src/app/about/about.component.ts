import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    product = {
        name: 'test',
        price: 100,
        qty: 1
    };
    constructor() { }

    ngOnInit() {
    }

    onNotify() {
        window.alert('You will be notified when the product goes on sale');
    }
}
