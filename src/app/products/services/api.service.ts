import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data: string[] = ['test1', 'test2']

  constructor() {
  }
}
