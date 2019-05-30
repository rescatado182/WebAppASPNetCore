import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { DataService } from '../shared/dataService';
var Cart = /** @class */ (function () {
    function Cart(data, router) {
        this.data = data;
        this.router = router;
    }
    Cart.prototype.OnCheckout = function () {
        if (this.data.loginRequired) {
            // Force Login
            this.router.navigate(["login"]);
        }
        else {
            // Go to checkout
            this.router.navigate(["checkout"]);
        }
    };
    Cart = tslib_1.__decorate([
        Component({
            selector: "the-cart",
            templateUrl: "cart.component.html",
            styleUrls: ["cart.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [DataService, Router])
    ], Cart);
    return Cart;
}());
export { Cart };
//# sourceMappingURL=cart.component.js.map