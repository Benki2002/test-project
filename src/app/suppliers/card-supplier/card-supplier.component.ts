import { Component, OnInit } from '@angular/core';
import { Supplier } from '../models/Supplier';
import { SupplierPhoneNumber } from '../models/SupplierPhoneNumber';

@Component({
  selector: 'suppliers-card-supplier',
  templateUrl: './card-supplier.component.html',
  styleUrls: ['./card-supplier.component.css'],
})
export class CardSupplierComponent implements OnInit {
  suppliers: Supplier[] = [];
  SupplierPhoneNumbers: SupplierPhoneNumber[] = [];
  constructor() {}

  ngOnInit(): void {
    this.suppliers.push({
      name: 'mohamed',
      address: 'mosta',
      type: 'producer',
      wilaya: 'Mosta',
      daira: 'Mosta',
      baladia: 'Salamandre',
      facebook: 'https://www.deepl.com/translator',
      instagram: 'https://www.deepl.com/translator',
    });
    this.SupplierPhoneNumbers.push({
      CounteryCode: '+241',
      Number: '0434531145',
    });
    this.suppliers.push({
      name: 'djamel ',
      address: 'tyart',
      type: 'wholesaler',
      wilaya: 'tyart',
      daira: 'tyart',
      baladia: 'tyart',
      facebook: 'https://www.deepl.com/translator',
      instagram: 'https://www.deepl.com/translator',
    });
    // this.SupplierPhoneNumbers.push({
    //   CounteryCode: '+44',
    //   Number: '04345641145',
    // });
  }
}
