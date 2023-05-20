import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'products-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  products: string[] = []
  constructor(private api2: ApiService) {
    this.products = this.api2.data
    console.log('Edit-product', this.products)

  }

  ngOnInit(): void {
  }

}
