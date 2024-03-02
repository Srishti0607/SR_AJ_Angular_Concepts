import { Component } from '@angular/core';
import { CustomdemoService } from '../../../../services/customdemo.service';

@Component({
  selector: 'app-workingwithradiobutton-tda',
  templateUrl: './workingwithradiobutton-tda.component.html',
  styleUrls: ['./workingwithradiobutton-tda.component.css']
})
export class WorkingwithradiobuttonTDAComponent {
  
constructor(private landingSrv: CustomdemoService) { }

  salary:any = 0;
  allowanceTypes: any = [];
  allowanceAmt: any = 0;
  netSal: any = 0;
  allowancePercentage: any;

  ngOnInit(): void {
    this.getAllowanceTypesData();
  }

  getAllowanceTypesData(){
    this.landingSrv.getAllowanceTypes().subscribe((data: any) => {
      if (data) {
        this.allowanceTypes = data;        
      } 
    });
}

calculateAmt(aType:any)
{
    this.allowancePercentage=aType.val;    
    this.allowanceAmt=(parseFloat(this.salary) * parseFloat(this.allowancePercentage)/100).toFixed(2);
    this.netSal=(parseFloat(this.salary)+parseFloat(this.allowanceAmt)).toFixed(2); 
}



}
