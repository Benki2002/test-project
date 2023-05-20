import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'products-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  products: string[] = [];

  constructor(private api: ApiService) {
    this.products = this.api.data
    console.log('list products', this.products)
  }

  ngOnInit(): void {
  }

}
