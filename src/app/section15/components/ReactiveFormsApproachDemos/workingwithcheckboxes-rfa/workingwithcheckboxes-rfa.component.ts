import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomdemoService } from '../../../../services/customdemo.service';
@Component({
  selector: 'app-workingwithcheckboxes-rfa',
  templateUrl: './workingwithcheckboxes-rfa.component.html',
  styleUrls: ['./workingwithcheckboxes-rfa.component.css']
})
export class WorkingwithcheckboxesRfaComponent {

  constructor(private landingSrv: CustomdemoService) { }

  reactiveForm!: FormGroup;
  allowanceTypesObj: any = [];

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      salary: new FormControl(0),
      netSal: new FormControl(0),
      allowanceAmt: new FormControl(0),
      allowancePercentage: new FormControl('', [Validators.required]),

    });
    this.getAllowanceTypesData();
  }

  getAllowanceTypesData(){
    this.landingSrv.getAllowanceTypes().subscribe((data: any) => {
      if (data) {
        this.allowanceTypesObj = data;

        this.allowanceTypesObj.forEach((data2: { [x: string]: boolean; }) => {
          data2['checked'] = false;
        });     
        

      } 
    });
}
calculateAmt(aType:any)
{
  let salary,allowanceamt,netsal:number = 0;

  salary=parseFloat(this.reactiveForm.get('salary')!.value);
  allowanceamt = parseFloat(this.reactiveForm.get('allowanceAmt')!.value);
  netsal=parseFloat(this.reactiveForm.get('netSal')!.value);
 
  if(netsal == 0)
    netsal=salary;

    if(!aType.checked){
      aType.checked = true;

      if(salary > 0){
        allowanceamt += (salary * aType.val/100);
        this.reactiveForm.get('allowanceAmt')!.setValue(allowanceamt);
        netsal=salary+allowanceamt;
        this.reactiveForm.get('netSal')!.setValue(netsal);
      }
    }
    else{
      aType.checked = false;

      if(salary > 0){
        allowanceamt = allowanceamt - (salary * (aType.val/100));
        this.reactiveForm.get('allowanceAmt')!.setValue(allowanceamt);
        netsal=netsal-(salary * (aType.val/100));
        this.reactiveForm.get('netSal')!.setValue(netsal);
      }

    }

}


}
