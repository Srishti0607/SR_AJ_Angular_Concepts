import { Component } from '@angular/core';

import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { CustomdemoService } from '../../../../services/customdemo.service';


@Component({
  selector: 'app-workingwithradio-rfa',
  templateUrl: './workingwithradio-rfa.component.html',
  styleUrls: ['./workingwithradio-rfa.component.css']
})
export class WorkingwithradioRfaComponent {

  constructor(private landingSrv: CustomdemoService) { }

  reactiveForm!: FormGroup;
  allowanceTypesObj: any = [];

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      salary: new FormControl(0,[Validators.required,Validators.min(1000)]),
      allowancePercentage: new FormControl('', [Validators.required]),
      allowanceAmt: new FormControl(0),
      netSal: new FormControl(0)    

   });
      this.getAllowanceTypes();
   }

   getAllowanceTypes(){
    this.landingSrv.getAllowanceTypes().subscribe((data: any) => {
      if (data) {
       this.allowanceTypesObj = data;
      }
    })

  }

  calculateAmt()
  {
    let salary,allowanceamt,netsalary,allowancepercentage:any;

    allowancepercentage=this.reactiveForm.get('allowancePercentage')!.value.split('-')[1];
    salary=this.reactiveForm.get('salary')!.value;
    allowanceamt=(parseFloat(salary) * parseFloat(allowancepercentage)/100).toFixed(2);
    netsalary=(parseFloat(salary)+parseFloat(allowanceamt)).toFixed(2);
    
    
        this.reactiveForm.get('allowanceAmt')!.setValue(allowanceamt);
        this.reactiveForm.get('netSal')!.setValue(netsalary);
  }

   

}
