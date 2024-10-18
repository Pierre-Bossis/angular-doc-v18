import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly _productEndPoint: string = 'http://localhost:3000/products';

  //rajouter : provideHttpClient() dans les providers du app.config.ts
  constructor (private _httpClient: HttpClient) { }

  // CRUD
  get (): Observable<Product[]> {
    return this._httpClient.get<Product[]>(this._productEndPoint);
  }

  getById (id: number): Observable<Product> {
    return this._httpClient.get<Product>(this._productEndPoint + '/' + id);
  }

  add (product: Product): Observable<void> {
    return this._httpClient.post<void>(this._productEndPoint, product);
  }

  delete (id: number): Observable<void> {
    return this._httpClient.delete<void>(this._productEndPoint + '/' + id);
  }

  update (id: number, product: Product): Observable<void> {
    return this._httpClient.put<void>(this._productEndPoint + '/' + id, product);
  }

  patch (id: number, product: Product): Observable<void> {
    return this._httpClient.patch<void>(this._productEndPoint + '/' + id, product);
  }
}
