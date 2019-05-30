﻿import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Product } from "./product";
import * as OrderNS from "./order";

@Injectable()
export class DataService {

    constructor(private http: HttpClient) { }

    private token: string = "";
    private tokenExpiration: Date;

    public order: OrderNS.Order = new OrderNS.Order();

    public products: Product[] = [];

    loadProducts(): Observable<boolean> {
        return this.http.get("/api/products").pipe(
            map((data: any[]) => {
                this.products = data;
                return true;
            }));
    }

    public get loginRequired(): boolean {
        return this.token.length == 0 || this.tokenExpiration > new Date();
    }

    login(creds): Observable<boolean> {
        return this.http
            .post("/account/createtoken", creds).pipe(
            map((data: any) => {
                this.token = data.token;
                this.tokenExpiration = data.expiration;
                return true;
            }));
    }

    public AddToOrder(product: Product) {

        let item: OrderNS.OrderItem = this.order.items.find(
            i => i.productId == product.id
        );

        if (item) {

            item.quantity++;

        } else {

            item = new OrderNS.OrderItem();

            item.productId = product.id;
            item.productArtist = product.artist;
            item.productCategory = product.category;
            item.productSize = product.size;
            item.productTitle = product.title;
            item.unitPrice = product.price;
            item.quantity = 1;

            this.order.items.push(item);
        }
        
    }
}