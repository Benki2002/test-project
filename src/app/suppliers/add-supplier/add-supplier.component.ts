import { Component, OnInit } from '@angular/core';

interface supplierType {
  value: string;
}
interface supplierState {
  value: string;
}
interface supplierDaira {
  value: string;
}
interface supplierbaladia {
  value: string;
}
interface countryCode {
  value: string;
}
@Component({
  selector: 'suppliers-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css'],
})
export class AddSupplierComponent implements OnInit {
  constructor() {}

  supplierTypes: supplierType[] = [
    { value: 'wholesaler' },
    { value: 'producer' },
    { value: 'intermediary' },
  ];
  States: supplierState[] = [
    { value: 'Oran' },
    { value: 'Mostaganem' },
    { value: 'Ghilizane' },
    { value: 'Sidi bel Abbas' },
    { value: 'Tisimcilet' },
    { value: 'Chlef' },
  ];
  Daira: supplierDaira[] = [
    { value: 'Oran' },
    { value: 'Mostaganem' },
    { value: 'Ghilizane' },
    { value: 'Sidi bel Abbas' },
    { value: 'Tisimcilet' },
    { value: 'Chlef' },
  ];
  baladia: supplierbaladia[] = [
    { value: 'Oran' },
    { value: 'Mostaganem' },
    { value: 'Ghilizane' },
    { value: 'Sidi bel Abbas' },
    { value: 'Tisimcilet' },
    { value: 'Chlef' },
  ];
  countryCodes: countryCode[] = [
    { value: '+1' },
    { value: '+2' },
    { value: '+44' },
    { value: '+214' },
  ];

  ngOnInit(): void {}
}
