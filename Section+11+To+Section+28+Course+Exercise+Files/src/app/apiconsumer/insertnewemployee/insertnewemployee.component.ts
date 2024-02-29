import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { Employee } from '../models/Employee.model';
import { DatabaseactionsService } from '../services/databaseactions.service';

@Component({
  selector: 'app-insertnewemployee',
  templateUrl: './insertnewemployee.component.html',
  styleUrls: ['./insertnewemployee.component.css']
})
export class InsertnewemployeeComponent {
  newEmployee: Employee=new Employee();

  constructor(private router:Router,private landingService:DatabaseactionsService)
  {}

  insertNewEmployee()
{
  this.landingService.insertEmployee(this.newEmployee).subscribe((data: any) => {
  alert("Record has been added successfully..");
  this.router.navigate(['/showallemployees']);
  });

}


}
