(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Product List';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'the-shop',
            template: __webpack_require__(/*! ./app.component.html */ "./app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms/ */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _shop_productList_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shop/productList.component */ "./app/shop/productList.component.ts");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/dataService */ "./app/shared/dataService.ts");
/* harmony import */ var _shop_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shop/cart.component */ "./app/shop/cart.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shop/shop.component */ "./app/shop/shop.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./checkout/checkout.component */ "./app/checkout/checkout.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./app/login/login.component.ts");













var routes = [
    { path: "", component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_10__["Shop"] },
    { path: "checkout", component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_11__["Checkout"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_12__["Login"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _shop_productList_component__WEBPACK_IMPORTED_MODULE_7__["ProductList"],
                _shop_cart_component__WEBPACK_IMPORTED_MODULE_9__["Cart"],
                _shop_shop_component__WEBPACK_IMPORTED_MODULE_10__["Shop"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_11__["Checkout"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["Login"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms___WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, {
                    useHash: true,
                    enableTracing: false,
                })
            ],
            providers: [
                _shared_dataService__WEBPACK_IMPORTED_MODULE_8__["DataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/checkout/checkout.component.css":
/*!*********************************************!*\
  !*** ./app/checkout/checkout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkout-thumb {\n  max-width: 100px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tvdXQtdGh1bWIge1xuICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./app/checkout/checkout.component.html":
/*!**********************************************!*\
  !*** ./app/checkout/checkout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h3>Confirm Order</h3>\n  <table class=\"table table-bordered table-hover\">\n    <tr *ngFor=\"let o of data.order.items\">\n      <td><img src=\"/img/{{ o.productArtId }}.jpg\" alt=\"o.productTitle\" class=\"img-thumbnail checkout-thumb\" /></td>\n      <td>{{ o.productCategory }}({{ o.productSize }}) - {{ o.productArtist }}: {{ o.productTitle }}</td>\n      <td>{{ o.quantity }}</td>\n      <td>{{ o.unitPrice|currency:'USD':true }}</td>\n      <td>{{ (o.unitPrice * o.quantity)|currency:'USD':true }}</td>\n    </tr>\n  </table>\n  <div class=\"col-md-4 offset-md-8 text-right\">\r\n      <table class=\"table table-condensed\">\r\n          <tr>\r\n              <td class=\"text-right\">Subtotal</td>\r\n              <td class=\"text-right\">{{ data.order.subtotal|currency:'USD':true }}</td>\r\n          </tr>\r\n          <tr>\r\n              <td class=\"text-right\">Shipping</td>\r\n              <td class=\"text-right\">$ 0.00</td>\r\n          </tr>\r\n          <tr>\r\n              <td class=\"text-right\">Total:</td>\r\n              <td class=\"text-right\">{{ data.order.subtotal|currency:'USD':true }}</td>\r\n          </tr>\r\n      </table>\r\n      <button class=\"btn btn-success\" (click)=\"onCheckout()\">Complete Purchase</button>&nbsp;&nbsp;\r\n      <a routerLink=\"/\" class=\"btn btn-info\">Cancel</a>\r\n  </div>\n\n</div>"

/***/ }),

/***/ "./app/checkout/checkout.component.ts":
/*!********************************************!*\
  !*** ./app/checkout/checkout.component.ts ***!
  \********************************************/
/*! exports provided: Checkout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkout", function() { return Checkout; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dataService */ "./app/shared/dataService.ts");



var Checkout = /** @class */ (function () {
    function Checkout(data) {
        this.data = data;
    }
    Checkout.prototype.onCheckout = function () {
        // TODO
        alert("Doing checkout");
    };
    Checkout = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "checkout",
            template: __webpack_require__(/*! ./checkout.component.html */ "./app/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./app/checkout/checkout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], Checkout);
    return Checkout;
}());



/***/ }),

/***/ "./app/login/login.component.html":
/*!****************************************!*\
  !*** ./app/login/login.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4 offset-md-4\">\n    <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\n    <form (submit)=\"onLogin()\" #theForm=\"ngForm\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"creds.username\" #username=\"ngModel\" required />\n        <div class=\"text-danger\" *ngIf=\"username.touched && username.invalid && username.errors.required\">Username is required!</div>\n      </div>\n      <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"creds.password\" #password=\"ngModel\" required />\r\n          <div class=\"text-danger\" *ngIf=\"password.touched && password.invalid && password.errors.required\">Password is required!</div>\r\n      </div>\n      <div class=\"form-group\">\n        <input type=\"submit\" class=\"btn btn-success\" value=\"Login\" [disabled]=\"theForm.invalid\" />\n        <a routerLink=\"/\" class=\"btn btn-default\">Cancel</a>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./app/login/login.component.ts":
/*!**************************************!*\
  !*** ./app/login/login.component.ts ***!
  \**************************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/dataService */ "./app/shared/dataService.ts");




var Login = /** @class */ (function () {
    function Login(data, router) {
        this.data = data;
        this.router = router;
        this.errorMessage = "";
        this.creds = {
            username: "",
            password: ""
        };
    }
    Login.prototype.onLogin = function () {
        var _this = this;
        // Call login Service
        this.data.login(this.creds)
            .subscribe(function (success) {
            if (success) {
                if (_this.data.order.items.length == 0) {
                    _this.router.navigate([""]);
                }
                else {
                    _this.router.navigate(["checkout"]);
                }
            }
        }, function (err) { return _this.errorMessage = "Failed to login"; });
    };
    Login = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "login",
            template: __webpack_require__(/*! ./login.component.html */ "./app/login/login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dataService__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Login);
    return Login;
}());



/***/ }),

/***/ "./app/shared/dataService.ts":
/*!***********************************!*\
  !*** ./app/shared/dataService.ts ***!
  \***********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order */ "./app/shared/order.ts");





var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.token = "";
        this.order = new _order__WEBPACK_IMPORTED_MODULE_4__["Order"]();
        this.products = [];
    }
    DataService.prototype.loadProducts = function () {
        var _this = this;
        return this.http.get("/api/products").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this.products = data;
            return true;
        }));
    };
    Object.defineProperty(DataService.prototype, "loginRequired", {
        get: function () {
            return this.token.length == 0 || this.tokenExpiration > new Date();
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.login = function (creds) {
        var _this = this;
        return this.http
            .post("/account/createtoken", creds).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this.token = data.token;
            _this.tokenExpiration = data.expiration;
            return true;
        }));
    };
    DataService.prototype.AddToOrder = function (product) {
        var item = this.order.items.find(function (i) { return i.productId == product.id; });
        if (item) {
            item.quantity++;
        }
        else {
            item = new _order__WEBPACK_IMPORTED_MODULE_4__["OrderItem"]();
            item.productId = product.id;
            item.productArtist = product.artist;
            item.productCategory = product.category;
            item.productSize = product.size;
            item.productTitle = product.title;
            item.unitPrice = product.price;
            item.quantity = 1;
            this.order.items.push(item);
        }
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./app/shared/order.ts":
/*!*****************************!*\
  !*** ./app/shared/order.ts ***!
  \*****************************/
/*! exports provided: Order, OrderItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItem", function() { return OrderItem; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var Order = /** @class */ (function () {
    function Order() {
        this.orderDate = new Date();
        this.items = new Array();
    }
    Object.defineProperty(Order.prototype, "subtotal", {
        // readonly
        get: function () {
            return lodash__WEBPACK_IMPORTED_MODULE_0__["sum"](lodash__WEBPACK_IMPORTED_MODULE_0__["map"](this.items, function (i) { return i.unitPrice * i.quantity; }));
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Order;
}());

var OrderItem = /** @class */ (function () {
    function OrderItem() {
    }
    return OrderItem;
}());



/***/ }),

/***/ "./app/shop/cart.component.css":
/*!*************************************!*\
  !*** ./app/shop/cart.component.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body, .cart, table {\r\n    font-size: 12px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvc2hvcC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvc2hvcC9jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5LCAuY2FydCwgdGFibGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./app/shop/cart.component.html":
/*!**************************************!*\
  !*** ./app/shop/cart.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Shopping Cart</h3>\r\n<div>#/Items: {{ data.order.items.length }}</div>\r\n<div>Subtotal: {{ data.order.subtotal }}</div>\r\n<table class=\"table table-sm table-striped table-bordered table-hover\">\r\n    <thead class=\"thead-light\">\r\n        <tr>\r\n            <th scope=\"col\">Product</th>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">$</th>\r\n            <th scope=\"col\">Total</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let o of data.order.items\">\r\n            <td scope=\"row\">{{ o.productCategory }} - {{ o.productTitle }}</td>\r\n            <td>{{ o.quantity }}</td>\r\n            <td>{{ o.unitPrice | currency:\"USD\":true }}</td>\r\n            <td>{{ (o.unitPrice * o.quantity) | currency:\"USD\":true }}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<button class=\"btn btn-info\" *ngIf=\"data.order.items.length > 0\" (click)=\"OnCheckout()\">Checkout</button>"

/***/ }),

/***/ "./app/shop/cart.component.ts":
/*!************************************!*\
  !*** ./app/shop/cart.component.ts ***!
  \************************************/
/*! exports provided: Cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/dataService */ "./app/shared/dataService.ts");




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
    Cart = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "the-cart",
            template: __webpack_require__(/*! ./cart.component.html */ "./app/shop/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./app/shop/cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dataService__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Cart);
    return Cart;
}());



/***/ }),

/***/ "./app/shop/productList.component.css":
/*!********************************************!*\
  !*** ./app/shop/productList.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-size: 12px;\r\n}\r\n\r\n\r\n.product-info {\r\n    font-size: 12px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n\r\n.product-info img {\r\n    max-width: 100px;\r\n    float: left;\r\n    margin: 0 5px;\r\n    border: 1px solid black;\r\n}\r\n\r\n\r\n.product-info .product-name {\r\n    font-size: larger;\r\n    font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvc2hvcC9wcm9kdWN0TGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOzs7QUFDSTtJQUNBLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvc2hvcC9wcm9kdWN0TGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcblxyXG4ucHJvZHVjdC1pbmZvIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuICAgIC5wcm9kdWN0LWluZm8gaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLnByb2R1Y3QtaW5mbyAucHJvZHVjdC1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./app/shop/productList.component.html":
/*!*********************************************!*\
  !*** ./app/shop/productList.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n    <div class=\"product-info col-md-4 well well-sm\" *ngFor=\"let p of products\">\r\n\r\n        <div class=\"bg-light p-1\">\r\n            <img src=\"/img/{{ p.artId }}.jpg\" class=\"img-fuild\" [alt]=\"p.title\" />\r\n            <h3 class=\"product-name\">{{ p.category }} - {{ p.size }}</h3>\r\n            <div><strong>Price</strong>: {{ p.price | currency:\"USD\":true }}</div>\r\n            <div><strong>Artist</strong>: {{ p.artist }}</div>\r\n            <div><strong>Title</strong>: {{ p.title }}</div>\r\n            <div><strong>Description</strong>: {{ p.artDescription }}</div>\r\n\r\n            <button id=\"buyButton\" class=\"btn btn-success btn-block\" (click)=\"addProduct(p)\">Buy</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./app/shop/productList.component.ts":
/*!*******************************************!*\
  !*** ./app/shop/productList.component.ts ***!
  \*******************************************/
/*! exports provided: ProductList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductList", function() { return ProductList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dataService */ "./app/shared/dataService.ts");



var ProductList = /** @class */ (function () {
    function ProductList(data) {
        this.data = data;
        this.products = [];
    }
    ProductList.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadProducts()
            .subscribe(function (success) {
            if (success) {
                _this.products = _this.data.products;
            }
        });
    };
    ProductList.prototype.addProduct = function (product) {
        this.data.AddToOrder(product);
    };
    ProductList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "product-list",
            template: __webpack_require__(/*! ./productList.component.html */ "./app/shop/productList.component.html"),
            styles: [__webpack_require__(/*! ./productList.component.css */ "./app/shop/productList.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], ProductList);
    return ProductList;
}());



/***/ }),

/***/ "./app/shop/shop.component.html":
/*!**************************************!*\
  !*** ./app/shop/shop.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-9\">\r\n        <h3>{{ title }}</h3>\r\n        <product-list></product-list>\r\n    </div>\r\n\r\n    <div class=\"col-md-3 cart\">\r\n        <div class=\"card bg-light p-2\">\r\n            <the-cart></the-cart>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./app/shop/shop.component.ts":
/*!************************************!*\
  !*** ./app/shop/shop.component.ts ***!
  \************************************/
/*! exports provided: Shop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shop", function() { return Shop; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var Shop = /** @class */ (function () {
    function Shop() {
    }
    Shop = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "the-shop",
            template: __webpack_require__(/*! ./shop.component.html */ "./app/shop/shop.component.html")
        })
    ], Shop);
    return Shop;
}());



/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pinzona.5\Documents\Projects\CoreFramework\CoreProject\CoreProject\ClientApp\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map