import {Component, OnInit} from '@angular/core';
import {FancyImageUploaderOptions, UploadedFile} from 'ng2-fancy-image-uploader';
import {Product, ProductsService} from "../products.service";
import {ActivatedRoute, Router} from "@angular/router";
import {restServer} from "../settings";

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
    onModalShow: boolean = false;
    product: Product;
    rest: string = restServer;

    options: FancyImageUploaderOptions;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private productsService: ProductsService) {

    }

    ngOnInit() {
        this.product = {
            id: parseInt(this.route.snapshot.paramMap.get('id')),
            caption: '',
            url: '',
            main_img: '',
            description: '',
            img1: '',
            img2: '',
            img3: '',
            img4: '',
            deleted: 0,
            categories: []
        };

        this.options = {
            thumbnailHeight: 200,
            thumbnailWidth: 200,
            uploadUrl: this.rest + 'admin/imgUploader',
            allowedImageTypes: ['image/png', 'image/jpeg'],
            maxImageSize: 3
        };
        this.Load();
    }

    Load() {
        this.productsService.get(this.product.id)
            .subscribe(product => this.product = product);
    }

    onUploadMainImg(file: UploadedFile) {
        let path = JSON.parse(file.response).path;
        this.product.main_img = JSON.parse(file.response).path;
    }

    onUploadImg1(file: UploadedFile) {
        let path = JSON.parse(file.response).path;
        this.product.img1 = JSON.parse(file.response).path;
    }

    onUploadImg2(file: UploadedFile) {
        let path = JSON.parse(file.response).path;
        this.product.img2 = JSON.parse(file.response).path;
    }

    onUploadImg3(file: UploadedFile) {
        let path = JSON.parse(file.response).path;
        this.product.img3 = JSON.parse(file.response).path;
    }

    onUploadImg4(file: UploadedFile) {
        let path = JSON.parse(file.response).path;
        this.product.img4 = JSON.parse(file.response).path;
    }

    save() {
        this.productsService.update(this.product).subscribe((resp) => {
            this.onModalShow = true;
        });
    }

    onDialogDone(d: boolean) {
        this.onModalShow = false;
        this.router.navigate(['/products']);
    }

}
