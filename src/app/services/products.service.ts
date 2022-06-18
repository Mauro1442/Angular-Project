import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
//<01.02.50
export class ProductsService {
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get(
      'https://api.mercadolibre.com/sites/MLA/search?q=ipod'
    );
  }
  create(body: any) {
    return this.http.post(
      'https://api.mercadolibre.com/sites/MLA/search?q=ipod',
      body
    );
  }
  update(body: any) {
    return this.http.put(
      'https://api.mercadolibre.com/sites/MLA/search?q=ipod',
      body
    );
  }
  delete() {
    return this.http.delete(
      'https://api.mercadolibre.com/sites/MLA/search?q=ipod'
    );
  }
}
