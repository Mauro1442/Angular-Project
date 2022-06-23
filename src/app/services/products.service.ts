import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { lastValueFrom, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product, ResponseProduct } from 'src/interfaces/Products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<Product[]> {
    return this.http
      .get<ResponseProduct>(environment.apiEndpoint + 'sites/MLA/search?q=ipod')
      .pipe(map((value: ResponseProduct) => value.results));
  }
  getAllPromise() {
    return lastValueFrom(
      this.http
        .get(environment.apiEndpoint + 'sites/MLA/search?q=ipod')
        .pipe(map((value: any) => value['results']))
    );
  }
  getById(id: string | null): Promise<Product> {
    return lastValueFrom(
      this.http.get<Product>(environment.apiEndpoint + 'items/' + id)
    );
  }
  create(body: any) {
    return this.http.post(
      environment.apiEndpoint + 'sites/MLA/search?q=ipod',
      body
    );
  }
  update(body: any) {
    return this.http.put(
      environment.apiEndpoint + 'sites/MLA/search?q=ipod',
      body
    );
  }
  delete() {
    return this.http.delete(
      environment.apiEndpoint + 'sites/MLA/search?q=ipod'
    );
  }
}
