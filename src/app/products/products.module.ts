import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';



@NgModule({
  declarations: [
    ListProductsComponent,
    EditProductComponent,
    AddProductComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListProductsComponent,
    EditProductComponent,
    AddProductComponent,
    ViewProductComponent
  ]
})
export class ProductsModule { }
