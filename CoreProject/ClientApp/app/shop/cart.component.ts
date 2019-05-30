import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { DataService } from '../shared/dataService';

@Component({
    selector: "the-cart",
    templateUrl: "cart.component.html",
    styleUrls: [ "cart.component.css" ]
})
export class Cart {

    constructor(private data: DataService, private router: Router) { }

    OnCheckout() {
        if (this.data.loginRequired) {
            // Force Login
            this.router.navigate(["login"]);
        } else {
            // Go to checkout
            this.router.navigate(["checkout"]);
        }
    }
}