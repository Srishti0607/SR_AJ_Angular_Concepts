import { Injectable } from '@angular/core';

import { Employee } from '../models/Employee.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseactionsService {

  constructor(private http: HttpClient) { }

  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>('https://localhost:7199/api/Employees');
  }

  getEmployeeDetails(id:any):Observable<Employee>{
    return this.http.get<Employee>('https://localhost:7199/api/Employees/'+id);
  }

  updateEmployeeDetails(id:any,employee:Employee){
    return this.http.put<Employee>('https://localhost:7199/api/Employees/'+id,employee);
  }

  deleteEmployeeDetails(id:any):Observable<Employee>{
    return this.http.delete<Employee>('https://localhost:7199/api/Employees/'+id);
  }

  insertEmployee(newEmployee: Employee){    
    return this.http.post<Employee>('https://localhost:7199/api/Employees',newEmployee);
  }


}
