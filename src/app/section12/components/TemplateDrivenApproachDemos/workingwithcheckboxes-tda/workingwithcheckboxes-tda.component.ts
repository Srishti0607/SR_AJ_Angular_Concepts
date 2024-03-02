import { Component } from '@angular/core';
import { CustomdemoService } from '../../../services/customdemo.service';

@Component({
  selector: 'app-workingwithcheckboxes-tda',
  templateUrl: './workingwithcheckboxes-tda.component.html',
  styleUrls: ['./workingwithcheckboxes-tda.component.css']
})
export class WorkingwithcheckboxesTdaComponent {

  constructor(private landingSrv: CustomdemoService) { }

  salary:any = 0;
  allowanceTypes: any = [];
  allowancePercentage:any;
  allowanceAmt: any = 0;
  netSal: any = 0;

  ngOnInit(): void {
      this.getAllowanceTypesData();
    }

    getAllowanceTypesData(){
      this.landingSrv.getAllowanceTypes().subscribe((data: any) => {
        if (data) {
          this.allowanceTypes = data;
  
          this.allowanceTypes.forEach((data2: { [x: string]: boolean; }) => {
            data2['checked'] = false;
         });           
        } 
      });
  }

  calculateAmt(aType:any)
{
  if(this.netSal == 0)
    this.netSal=this.salary;

    if(!aType.checked){
      aType.checked = true;

      if(this.salary > 0){
        this.allowanceAmt +=  (this.salary * aType.val/100); 
        
        this.netSal=parseFloat(this.salary)+ parseFloat(this.allowanceAmt); 
      }

    }
    else{
      aType.checked = false;

      if(this.salary > 0){
        this.allowanceAmt -= (this.salary * (aType.val/100));        
        this.netSal=parseFloat(this.netSal)-parseFloat((this.salary)) * (aType.val/100);
      }
    }



}
    

}
