import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { EditSupplierComponent } from './edit-supplier/edit-supplier.component';
import { CardSupplierComponent } from './card-supplier/card-supplier.component';
import { ListSupplierComponent } from './list-supplier/list-supplier.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AddSupplierComponent,
    EditSupplierComponent,
    CardSupplierComponent,
    ListSupplierComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
  ],
  exports: [
    AddSupplierComponent,
    EditSupplierComponent,
    CardSupplierComponent,
    ListSupplierComponent,
  ],
})
export class SuppliersModule {}
