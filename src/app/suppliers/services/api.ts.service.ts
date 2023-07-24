import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiTsService {
  constructor(private http: HttpClient) {}
  // get suppliers
  getSuppliers() {
    return this.http.get<any[]>('http://localhost:3000/suppliers');
  }
}
