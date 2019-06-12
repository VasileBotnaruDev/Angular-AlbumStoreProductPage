import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-tacklisting',
  templateUrl: './product-tacklisting.component.html',
  styleUrls: ['./product-tacklisting.component.css']
})
export class ProductTacklistingComponent implements OnInit {

  albumInfo: Album;

  constructor(private _productService: ProductService) { 

  }

  ngOnInit() {
    this._productService.getAlbum(1)
                        .subscribe(response => this.albumInfo = response);
  }

}
