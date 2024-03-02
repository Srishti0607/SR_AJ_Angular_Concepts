import { Component } from '@angular/core';
import { Employee } from '../models/Employee.model';
import { DatabaseactionsService } from '../services/databaseactions.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-showemployeedetails',
  templateUrl: './showemployeedetails.component.html',
  styleUrls: ['./showemployeedetails.component.css']
})
export class ShowemployeedetailsComponent {

  objEmployee: Employee=new Employee();
  eId:any;
  
  constructor(private landingService:DatabaseactionsService,activeRoute: ActivatedRoute)
  {
    this.eId=activeRoute.snapshot.params["id"];
  }

  ngOnInit() : void
  {
    
    this.getEmployeeDetails();
  }

  getEmployeeDetails()
  {
    this.landingService.getEmployeeDetails(this.eId).subscribe((data: any) => {
      if (data) {
        this.objEmployee = data;        
      } 
    });
  }

}
