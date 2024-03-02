import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomdemoService {

  private currencyDetBaseURL: string = 'https://api.exchangerate.host'


  constructor(private http: HttpClient) { }

  getCountryDetails() {
    let url = "assets/CountryDet.json"
    return this.http.get(url);
  }

  getCurrencyData(sourceCurr: string) {
    return this.http.get(this.currencyDetBaseURL + '/latest?base=' + sourceCurr);
  }


  getAllowanceTypes():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/allowancetypes');
  }

   //Get users
   getUsers() {
    let url = "assets/USERS.json"
    return this.http.get(url);
  }

  //Get Order details from JSON
  getOrderData() {
    let url = "assets/Orders_Details.json"
    return this.http.get(url);
  }

  getNewOrderData() {
    let url = "assets/OrderWiseOrderDetails.json"
    return this.http.get(url);
  }

  getEmployeeData() {
    let url = "assets/Employees.json"
    return this.http.get(url);
  }

   //get Data for Employee
   getEmpData() {  
    return this.http.get('http://localhost:3000/employee')
  }

  insertEmpData(payload: any){    
    return this.http.post('http://localhost:3000/employee',payload)
  }

  updateEmpData(payload: any,id: string){
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
   
    
    return this.http.put('http://localhost:3000/employee/'+id,payload,{
      headers
    });
  }

  deleteEmpData(id:any){
    return this.http.delete('http://localhost:3000/employee/'+id);
  }

//bulk Insert
bulkInsertData(payload: any) {
  const headers = new HttpHeaders()
  .set('Content-Type', 'application/json');
  let url = "http://localhost:3000/bulkInsert"
  return this.http.post(url, payload,{headers});
}

  //get Data
  getDataToUpdate() {
    let url = "http://localhost:3000/bulkInsert"
    return this.http.get(url);
  }


  bulkUpdateData(payload:any) {
    let url = "http://localhost:3000/bulkInsert/"+payload.id;
    return this.http.put(url, payload);
  }

  deleteCustomerData(id:any){
    return this.http.delete('http://localhost:3000/bulkinsert/'+id);
  }

  getCountryData(page: string | number,limit: string | number){
    return this.http.get('http://localhost:3000/country?_page='+page+'&_limit='+limit);
  }
  
  
}