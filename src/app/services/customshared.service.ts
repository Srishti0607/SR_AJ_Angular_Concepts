import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomsharedService {

  userName = new BehaviorSubject('Nate Diaz');

  public captureBeh = new BehaviorSubject<any>('');


  constructor(private http: HttpClient) { }

  //receiving dropdown value from parent component
  setCategoryName(categoryname: any) {
    this.captureBeh.next(categoryname);
}

getbehCategories(){
  let url = "https://fakestoreapi.com/products/categories";
  return this.http.get(url);
}

getbehCategoryWiseProductsData(category:any){
  let url = "https://fakestoreapi.com/products/category/"+category;
  return this.http.get(url);
}

}
