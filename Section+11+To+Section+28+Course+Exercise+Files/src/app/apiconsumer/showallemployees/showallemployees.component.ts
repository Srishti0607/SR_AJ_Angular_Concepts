import { Component } from '@angular/core';
import { Employee } from '../models/Employee.model';
import { DatabaseactionsService } from '../services/databaseactions.service';

@Component({
  selector: 'app-showallemployees',
  templateUrl: './showallemployees.component.html',
  styleUrls: ['./showallemployees.component.css']
})
export class ShowallemployeesComponent {

  allEmployees!: Employee[];

  constructor(private landingService:DatabaseactionsService)
  {}

  ngOnInit() : void
  {
    this.getAllEmployees();
  }

  getAllEmployees()
  {
    this.landingService.getAllEmployees().subscribe((data: any) => {
      if (data) {
        this.allEmployees = data;        
      } 
    });
  }



}
