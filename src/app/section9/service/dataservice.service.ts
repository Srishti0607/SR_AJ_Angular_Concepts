import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {


  constructor(private http: HttpClient) { }

  GetCategories():Observable<string[]>{
    return this.http.get<string[]>('http://fakestoreapi.com/products/categories');
  }
  GetProducts():Observable<any[]>{
    return this.http.get<any[]>('http://fakestoreapi.com/products');
  }

}
