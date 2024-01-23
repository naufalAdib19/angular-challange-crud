import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  getData(): Promise<any> {
    return axios.get('https://fakestoreapi.com/products?limit=10');
  }
}
