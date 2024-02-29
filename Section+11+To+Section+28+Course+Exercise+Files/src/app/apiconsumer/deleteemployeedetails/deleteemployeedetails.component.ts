import { Component } from '@angular/core';
import { Employee } from '../models/Employee.model';
import { DatabaseactionsService } from '../services/databaseactions.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-deleteemployeedetails',
  templateUrl: './deleteemployeedetails.component.html',
  styleUrls: ['./deleteemployeedetails.component.css']
})
export class DeleteemployeedetailsComponent {

  objEmployee: Employee=new Employee();
  eId:any;
  constructor(private router: Router,private landingService:DatabaseactionsService,activeRoute: ActivatedRoute)
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


  deleteEmployee()
  {
    this.landingService.deleteEmployeeDetails(this.eId).subscribe((data: any) => {
    alert("Record has been Deleted successfully..");
    this.router.navigate(['/showallemployees']);
    });
  
  }



}
