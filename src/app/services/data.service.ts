import { Injectable } from '@angular/core';

import { default as data } from '../data.json';
import { Product } from '../models/interfaces/shop-data.models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getProductsData() {
    return data;
  }

  getCurrentProduct(id: number) {
    return data.find((product: Product) => product.id === id);
  }


  
}
