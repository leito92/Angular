import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../types/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiProductService {
  private url = 'https://6658ec85de346625136ae3f0.mockapi.io/products/'
  constructor(private http: HttpClient) { }
  getAll(): Observable<product[]> {
    return this.http.get<product[]>(this.url)
  }
  getProduct(id: string): Observable<product> {
    return this.http.get<product>(this.url + id)
  }
}
