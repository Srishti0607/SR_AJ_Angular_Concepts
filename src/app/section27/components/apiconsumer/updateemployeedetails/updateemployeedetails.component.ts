import { Component } from '@angular/core';
import { Employee } from '../models/Employee.model';
import { DatabaseactionsService } from '../services/databaseactions.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-updateemployeedetails',
  templateUrl: './updateemployeedetails.component.html',
  styleUrls: ['./updateemployeedetails.component.css']
})
export class UpdateemployeedetailsComponent {

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

  updateEmployee()
  {
    this.landingService.updateEmployeeDetails(this.eId,this.objEmployee).subscribe((data: any) => {
      alert("Record has been Updated successfully..");
      this.router.navigate(['/showallemployees']);
      });
  }


}
