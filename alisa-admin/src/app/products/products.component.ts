import {Component, OnInit} from '@angular/core';
import {Product, ProductsService} from "../products.service";
import {restServer} from "../settings";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    rest: string = restServer;
    products: Product[];

    onModalShow: boolean = false;

    constructor(private productsService: ProductsService) {
    }

    ngOnInit() {
        this.getList();
    }

    getList() {
        this.productsService.getList()
            .subscribe(products => this.products = products);
    }

    onDialogDone(d: boolean) {
        this.onModalShow = false;
    }

}
