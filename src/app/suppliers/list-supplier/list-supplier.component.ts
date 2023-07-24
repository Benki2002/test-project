import { Component, OnInit } from '@angular/core';
import { ApiTsService } from '../services/api.ts.service';

@Component({
  selector: 'suppliers-list-supplier',
  templateUrl: './list-supplier.component.html',
  styleUrls: ['./list-supplier.component.css'],
})
export class ListSupplierComponent implements OnInit {
  constructor(private api: ApiTsService) {
    this.getSuppliers();
  }

  ngOnInit(): void {}

  getSuppliers() {
    this.api.getSuppliers().subscribe({
      next: (data: any) => {
        console.log('data', data);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
